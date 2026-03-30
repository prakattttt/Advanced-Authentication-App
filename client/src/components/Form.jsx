import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Form = ({ isLoginPage }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { login, register } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const formData = new FormData(e.target);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      if (isLoginPage) {
        await login(email, password);
        navigate("/");
      } else {
        await register(username, email, password);
        navigate("/login");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong!");
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
