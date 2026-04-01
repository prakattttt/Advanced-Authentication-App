import React from "react";
import OAuthBtn from "./OAuthBtn";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebook } from "react-icons/fa";

const socialConfig = {
  Google: {
    icon: <FcGoogle />,
    redirect: "http://localhost:5000/api/auth/google",
  },
  Github: {
    icon: <FaGithub />,
    redirect: "http://localhost:5000/api/auth/github",
  },
};

const OAuth = () => {
  return (
    <>
      <div className="divider text-center my-4">
        <span>Or continue with</span>
      </div>

      <div className="flex justify-center gap-4 max-small:flex-col">
        {Object.entries(socialConfig).map(([key, value]) => (
          <OAuthBtn
            key={key}
            icon={value.icon}
            label={key}
            redirect={value.redirect}
          />
        ))}
      </div>
    </>
  );
};

export default OAuth;