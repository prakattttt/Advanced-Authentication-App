import React from "react";
import { Link } from "react-router-dom";

const OAuthBtn = ({ icon, label, redirect }) => {
  return (
    <Link
      to={redirect}
      className="flex items-center justify-center gap-3 
                 border border-gray-300 rounded-md 
                 px-4 py-2 w-full
                 hover:bg-gray-100 transition duration-200"
    >
      <span className="text-xl">{icon}</span>
      <span className="font-medium">{label}</span>
    </Link>
  );
};

export default OAuthBtn;
