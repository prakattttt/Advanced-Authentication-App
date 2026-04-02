import { useState, useEffect } from "react";
import AuthContext from "../contexts/AuthContext.jsx";
import api from "../src/api.js";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await api.get("/");
        setUser(res.data.user);
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email, password) => {
    await api.post("/login", { email, password });

    const res = await api.get("/");
    setUser(res.data.user);
  };

  const register = async (username, email, password) => {
    await api.post("/register", {
      username,
      email,
      password,
    });
  };

  const logout = async () => {
      await api.post("/logout");
      setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
