import React from "react";
import Element from "./Element";
import dq from "../assets/dq.svg";
import profile from "../assets/myprofile.jpg";
import background from "../assets/background.jpg";

const LeftSection = () => {
  return (
    <section
      className="bg-cover flex-4 text-white"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="flex items-center m-10 max-lg:m-7">
        <span className="relative inline-flex items-center justify-center w-10 h-10 border-2 border-white rounded-md font-extrabold text-2xl">
          <span className="absolute inset-0 bg-white blur-sm -z-10 rounded-md"></span>
          A
        </span>
        <span className="ml-3 text-2xl font-bold">Authenticator</span>
      </div>

      <div className="m-10 mt-16 max-lg:m-7">
        <h1 className="text-3xl font-bold max-lg:text-2xl">
          This is a authentication application using MERN Stack.
        </h1>
        <p className="mt-4 text-xl max-lg:text-[1rem]">
          This project is made to enhance the skills of building the websites
          using MERN Stack and handle complex authentication backend logic.
        </p>
      </div>
      <Element />
      <div className="relative m-10 my-15 p-5 rounded-md overflow-hidden border-2 border-white max-lg:p-4">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
        <div className="relative z-10">
          <img src={dq} alt="quote icon" className="w-6 mb-3" />
          <p className="mb-4 text-white text-xl max-lg:text-[1rem] max-lg:mb-2">"The best way to learn to code is to code."</p>
          <div className="flex items-center gap-3">
            <img
              src={profile}
              alt="my profile"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex flex-col justify-center">
              <span className="font-semibold">Prakat Dhakal</span>
              <span className="text-sm text-gray-300">Student</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeftSection;
