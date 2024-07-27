import React, { useState } from "react";
import GenderCheckbox from "../component/GenderCheckbox";
import { Link } from "react-router-dom";
import useSignup from "../hooks/useSignup";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setFormData({ ...formData, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(formData);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-[300px] mx-auto p-4">
      <div className="w-full max-w-md p-6 rounded-lg bg-gray-800 shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-white-text">
          ---- Signup to
          <span className="text-neon-blue"> Aa-uChat ----</span>
        </h1>

        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-4">
            <label className="block text-sm mb-1">Username</label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full bg-dark-gray text-neon-blue border border-neon-blue rounded h-10 px-3"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full bg-dark-gray text-neon-blue border border-neon-blue rounded h-10 px-3"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full bg-dark-gray text-neon-blue border border-neon-blue rounded h-10 px-3"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-1">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full bg-dark-gray text-neon-blue border border-neon-blue rounded h-10 px-3"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
            />
          </div>

          <GenderCheckbox
            onCheckboxChange={handleCheckboxChange}
            selectedGender={formData.gender}
          />

          <Link
            to="/login"
            className="text-sm hover:underline hover:text-neon-blue mt-2 inline-block"
          >
            Already have an account?
          </Link>

          <div className="mt-4">
            <button
              className="w-full bg-neon-blue text-black font-bold py-2 rounded hover:bg-dark-blue"
              disabled={loading}
            >
              {loading ? (
                <span className="animate-spin">🔄</span> // Replace with your spinner
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
