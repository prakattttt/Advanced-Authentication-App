import React from "react";
import { Link } from "react-router-dom";

const Redirect2 = ({ isLoginPage }) => {
  return (
    <p className="mt-6 text-center text-sm">
      {isLoginPage ? "Don't have an account?" : "Already have an account?"}
      <Link to={isLoginPage ? "/register" : "/login"} className="text-blue-600">
        {isLoginPage ? " Sign up" : " Sign in"}
      </Link>
    </p>
  );
};

export default Redirect2;
