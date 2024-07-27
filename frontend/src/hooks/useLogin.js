import { useState } from "react"
import { useAuthContext } from "../context/AuthContext"
import toast from "react-hot-toast"

const handleInputErrors = (email, password) => {
  if (!email || !password) {
    toast.error("Please fill all the fields")
    return true
  }
  return false
}

const useLogin = () => {
  const [loading, setLoading] = useState(false)
  const { setAuthUser } = useAuthContext()

  const login = async (email, password) => {
    const checkError = handleInputErrors(email, password)
    if (checkError) {
      return
    }

    try {
      setLoading(true)
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()
      console.log("API Response:", data)

      if (!res.ok) {
        // Check for specific errors
        if (data.error) {
          throw new Error(data.error)
        } else {
          throw new Error("An unknown error occurred. Please try again.")
        }
      }

      // Handle successful login
      localStorage.setItem("user", JSON.stringify(data))
      setAuthUser(data)
      toast.success("Login successful!")
    } catch (error) {
      console.error("Login Error:", error.message)
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  return { loading, login }
}

export default useLogin
