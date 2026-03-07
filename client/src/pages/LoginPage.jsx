import React from "react";  
import LeftSection from "../components/LeftSection";
import RightSection from "../components/RightSection";

const LoginPage = () => {
  return (
    <main className="min-h-screen flex">
      <LeftSection isLoginPage={true}/>
      <RightSection isLoginPage={true}/>
    </main>
  );
};

export default LoginPage;
