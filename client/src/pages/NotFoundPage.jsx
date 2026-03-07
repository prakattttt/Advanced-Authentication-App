import React from "react";
import LeftSection from "../components/LeftSection";
import background from "../assets/background.png";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <main className="min-h-screen flex max-mid:flex-col">
      <section
        className="flex-4 bg-cover text-white flex flex-col justify-between"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="flex items-center m-10 max-lg:m-7">
          <span className="relative inline-flex items-center justify-center w-10 h-10 border-2 border-white rounded-md font-extrabold text-2xl">
            <span className="absolute inset-0 bg-white blur-sm -z-10 rounded-md"></span>
            A
          </span>
          <span className="ml-3 text-2xl font-bold">Authenticator</span>
        </div>

        <div className="m-10 max-lg:m-7">
          <h1 className="text-4xl font-bold max-lg:text-3xl">
            Oops! Page not found.
          </h1>

          <p className="mt-4 text-xl max-lg:text-base">
            The page you are looking for might have been removed, renamed, or is
            temporarily unavailable.
          </p>
        </div>

        <div className="m-10 text-gray-300 max-lg:m-7">
          <p>Secure Authentication System built with MERN Stack.</p>
        </div>
      </section>
      <section className="flex-3 bg-gray-100 flex items-center justify-center p-6">
        <div className="text-center max-w-md">
          <h1 className="text-8xl font-extrabold text-black">404</h1>

          <h2 className="mt-4 text-2xl font-semibold text-gray-700">
            Page Not Found
          </h2>

          <p className="mt-3 text-gray-500">
            The page you tried to access does not exist.
          </p>

          <Link
            to="/login"
            className="inline-block mt-6 px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition"
          >
            Go Back to Login
          </Link>
        </div>
      </section>
    </main>
  );
};

export default NotFoundPage;
