import React from "react";
import OAuthBtn from "./OAuthBtn";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebook } from "react-icons/fa";

const socialConfig = {
  Google: {
    icon: <FcGoogle />,
    path: "/google",
  },
  Facebook: {
    icon: <FaFacebook className="text-blue-600" />,
    path: "/facebook",
  },
  Github: {
    icon: <FaGithub />,
    path: "/github",
  },
};

const OAuth = () => {
  return (
    <>
      <div className="divider text-center my-4">
        <span>Or continue with</span>
      </div>

      <div className="flex justify-center gap-4 max-tiny:flex-col">
        {Object.entries(socialConfig).map(([key, value]) => (
          <OAuthBtn
            key={key}
            icon={value.icon}
            label={key}
            path={value.path}
          />
        ))}
      </div>
    </>
  );
};

export default OAuth;