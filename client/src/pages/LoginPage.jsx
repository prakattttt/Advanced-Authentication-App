import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <main className="min-h-screen flex">
      <section className="bg-green-400 flex-4"></section>
      <section className="flex-3 p-6 bg-gray-100 flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="absolute text-sm mb-6 top-5 right-10">
            New Here?
            <Link to="/signup" className="text-blue-600 ml-1">
              Sign up
            </Link>
          </div>

          <h1 className="text-3xl font-bold">Welcome Back</h1>
          <p className="text-gray-500 my-2">Sign in to your account</p>

          <form className="flex flex-col my-5">
            <label className="text-[0.9rem] mb-1">EMAIL ADDRESS</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="textbox"
            />

            <label className="text-[0.9rem] mt-4 mb-1">PASSWORD</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="textbox"
            />

            <span className="text-[0.8rem] my-2 cursor-pointer">
              Forgot Password?
            </span>

            <button className="my-3 bg-blue-800 text-white w-full rounded-md p-3 hover:bg-blue-700 transition ease">
              Sign In
            </button>
          </form>

          <div className="divider text-center my-4">
            <span>Or continue with</span>
          </div>

          <div className="flex justify-center gap-4">
            <div className="button">
              <Link to="/google">Google</Link>
            </div>
            <div className="button">
              <Link to="/facebook">Facebook</Link>
            </div>
            <div className="button">
              <Link to="/github">Github</Link>
            </div>
          </div>

          <p className="mt-6 text-center text-sm">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600">
              Sign up
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
