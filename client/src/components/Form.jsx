import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

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
      } else {
        await register(username, email, password);
      }

      navigate("/"); // ✅ go to protected route
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <h1 className="text-3xl font-bold">
        {isLoginPage ? "Welcome Back" : "Hello There"}
      </h1>

      {error && <p className="text-red-500">{error}</p>}

      <form onSubmit={handleSubmit}>
        {!isLoginPage && <input name="username" placeholder="username" />}

        <input name="email" placeholder="email" />
        <input name="password" placeholder="password" />

        <button disabled={loading}>
          {loading ? "Processing..." : "Submit"}
        </button>
      </form>
    </>
  );
};

export default Form;
