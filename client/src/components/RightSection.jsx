import React from "react";
import Redirect from "./Redirect";
import Form from "./Form";
import OAuth from "./OAuth";
import Redirect2 from "./Redirect2";

const RightSection = ({ isLoginPage }) => {
  return (
    <section className="flex-3 p-6 bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md">
        <Redirect isLoginPage={isLoginPage}/>
        <Form isLoginPage={isLoginPage}/>
        <OAuth />
        <Redirect2 isLoginPage={isLoginPage}/>
      </div>
    </section>
  );
};

export default RightSection;
