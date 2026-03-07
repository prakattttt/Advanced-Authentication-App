import React from "react";
import { Link } from "react-router-dom";

const Redirect = ({ isLoginPage }) => {
  return (
    <div className="absolute text-sm mb-6 top-5 right-10">
      { isLoginPage ? "New Here?" : "Been here before?" }
      <Link to={isLoginPage ? "/register" : "/login"} className="text-blue-600 ml-1">
        {isLoginPage ? "Sign up" : "Sign in"}
      </Link>
    </div>
  );
};

export default Redirect;
