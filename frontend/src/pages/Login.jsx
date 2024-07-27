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
    <div className="flex flex-col items-center justify-center">
      <div className="w-full max-w-md p-6 rounded-lg bg-gray-800 shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-white">
          ---- Login to
          <span className="text-neon-blue"> Aa-uChat ----</span>
        </h1>

        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm mb-1 text-white">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter Email"
              className="w-full bg-gray-700 text-neon-blue border border-neon-blue rounded h-10 px-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm mb-1 text-white">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter Password"
              className="w-full bg-gray-700 text-neon-blue border border-neon-blue rounded h-10 px-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-label="Password"
            />
          </div>

          <Link
            to="/signup"
            className="text-sm text-neon-blue hover:underline mt-2 inline-block"
          >
            {"Don't"} have an account?
          </Link>

          <div className="mt-4">
            <button
              className="w-full bg-neon-blue text-black font-bold py-2 rounded hover:bg-dark-blue disabled:opacity-50"
              disabled={loading}
              aria-label="Login"
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
