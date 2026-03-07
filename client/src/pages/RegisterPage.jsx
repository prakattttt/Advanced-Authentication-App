import React from "react";  
import LeftSection from "../components/LeftSection";
import RightSection from "../components/RightSection";

const RegisterPage = () => {
  return (
    <main className="min-h-screen flex">
      <LeftSection />
      <RightSection isLoginPage={false}/>
    </main>
  );
};

export default RegisterPage;