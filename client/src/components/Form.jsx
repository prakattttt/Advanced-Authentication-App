import { useState } from "react";
import api from "../api.js";

const Form = ({ isLoginPage }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    const formData = new FormData(e.target);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    function displaySuccess(message) {
      setSuccess(message || "Success!");
      if (!isLoginPage) {
        setTimeout(() => {
          setSuccess("");
        }, 3000);
      }
    }

    function displayError(message) {
      setError(message || "Success!");
      if (!isLoginPage) {
        setTimeout(() => {
          setError("");
        }, 3000);
      }
    }

    try {
      const url = isLoginPage ? "/login" : "/register";
      const response = await api.post(url, { username, email, password });
      displaySuccess(response.data.message);
      e.target.reset();
    } catch (err) {
      console.error(err);
      displayError(err.response?.data?.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <h1 className="text-3xl font-bold">
        {isLoginPage ? "Welcome Back" : "Hello There"}
      </h1>
      <p className="text-gray-500 my-2">
        {isLoginPage ? "Sign in to your account" : "Create a new account"}
      </p>

      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}

      <form className="flex flex-col my-5" onSubmit={handleSubmit}>
        {!isLoginPage && (
          <>
            <label className="text-[0.9rem] mb-1 font-semibold">USERNAME</label>
            <input
              type="text"
              placeholder="MyUsername"
              className="textbox"
              name="username"
            />
          </>
        )}

        <label className="text-[0.9rem] mt-4 mb-1 font-semibold">
          EMAIL ADDRESS
        </label>
        <input
          type="email"
          placeholder="you@example.com"
          className="textbox"
          name="email"
        />

        <label className="text-[0.9rem] mt-4 mb-1 font-semibold">
          PASSWORD
        </label>
        <input
          type="password"
          placeholder="Enter your password"
          className="textbox"
          name="password"
        />

        <span className="text-[0.8rem] my-2 cursor-pointer text-blue-700">
          {isLoginPage ? "Forgot Password?" : ""}
        </span>

        <button
          type="submit"
          disabled={loading}
          className="my-3 bg-blue-800 text-white w-full rounded-md p-3 hover:bg-blue-700 transition ease disabled:opacity-50"
        >
          {loading ? "Processing..." : isLoginPage ? "Sign In" : "Register"}
        </button>
      </form>
    </>
  );
};

export default Form;
