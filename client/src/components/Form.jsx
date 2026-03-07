import React from "react";

const Form = ({ isLoginPage }) => {
  return (
    <>
      <h1 className="text-3xl font-bold">{ isLoginPage ? "Welcome Back" : "Hello There" }</h1>
      <p className="text-gray-500 my-2">{ isLoginPage ? "Sign in to your account" : "Create a new account" }</p>

      <form className="flex flex-col my-5">
        <label className="text-[0.9rem] mb-1 font-semibold">EMAIL ADDRESS</label>
        <input type="email" placeholder="you@example.com" className="textbox" />

        <label className="text-[0.9rem] mt-4 mb-1 font-semibold">PASSWORD</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="textbox"
        />

        <span className="text-[0.8rem] my-2 cursor-pointer text-blue-700">
          { isLoginPage ? "Forgot Password?" : "" }
        </span>

        <button className="my-3 bg-blue-800 text-white w-full rounded-md p-3 hover:bg-blue-700 transition ease">
          { isLoginPage ? "Sign In" : "Register" }
        </button>
      </form>
    </>
  );
};

export default Form;
