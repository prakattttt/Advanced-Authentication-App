import React from "react";

const LeftSection = () => {
  return (
    <section className="bg-[url('../../public/background.png')] bg-cover flex-4 text-white ">
      <div className="flex items-center m-10">
        <span className="relative inline-flex items-center justify-center w-10 h-10 border-2 border-white rounded-md font-extrabold text-2xl">
          <span className="absolute inset-0 bg-white blur-sm -z-10 rounded-md"></span>
          A
        </span>
        <span className="ml-2 text-2xl font-bold">Authenticator</span>
      </div>
      <div className="m-10 mt-16">
        <h1 className="text-3xl font-bold">This is a authentication application using MERN Stack.</h1>
        <p className="mt-4 text-xl">This project is made to enhance the skills of building the websites using MERN Stack and handle complex authentication backend logic.</p>
      </div>

    </section>
  );
};

export default LeftSection;
