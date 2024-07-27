import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, loading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-[300px] mx-auto p-4 bg-black text-neon-blue">
      <div className="w-full max-w-md p-6 rounded-lg bg-gray-800 shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-white-text">
          ---- Login to
          <span className="text-neon-blue"> Aa-uChat ----</span>
        </h1>

        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-4">
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full bg-dark-gray text-neon-blue border border-neon-blue rounded h-10 px-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full bg-dark-gray text-neon-blue border border-neon-blue rounded h-10 px-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Link
            to="/signup"
            className="text-sm hover:underline hover:text-neon-blue mt-2 inline-block"
          >
            {"Don't"} have an account?
          </Link>

          <div className="mt-4">
            <button
              className="w-full bg-neon-blue text-black font-bold py-2 rounded hover:bg-dark-blue"
              disabled={loading}
            >
              {loading ? (
                <span className="animate-spin">🔄</span> // Replace with your spinner
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
