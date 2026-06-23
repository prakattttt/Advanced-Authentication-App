import React from "react";
import background from "../assets/background.jpg";
import webDevFacts from "../utils/facts.jsx";
import FactCard from "../components/FactCard.jsx";
import useAuth from "../../hooks/useAuth.jsx";

const MainPage = () => {
  const { user, logout } = useAuth();

  return (
    <main
      role="main"
      className="min-h-screen bg-cover bg-center text-white relative"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute inset-0 bg-black/40">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 px-4 sm:px-10 pt-6 sm:pt-4">
          <div className="flex items-center">
            <span className="relative inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 border-2 border-white rounded-md font-extrabold text-xl sm:text-2xl">
              <span className="absolute inset-0 bg-white blur-sm -z-10 rounded-md"></span>
              A
            </span>
            <span className="ml-3 text-xl sm:text-2xl font-bold">
              Authenticator
            </span>
          </div>

          <button
            onClick={logout}
            className="text-sm sm:text-xl border-2 border-white rounded-md px-3 py-1 sm:p-2 font-semibold backdrop-blur-xl hover:scale-[1.02] transition-all duration-150 cursor-pointer"
          >
            Log Out
          </button>
        </div>

        <div className="px-4 sm:px-10 mt-6 sm:mt-6">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Welcome back,{" "}
            <span className="underline underline-offset-4 decoration-white">
              {user}
            </span>
            !
          </h1>

          <p className="mt-3 text-sm sm:text-lg lg:text-xl text-gray-300">
            Here's what's shaping the world of web development in 2026.
          </p>
        </div>

        <div className="mx-4 sm:mx-10 my-6 border-t border-white/20" />

        <div className="px-4 sm:px-10 mb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {webDevFacts.map((fact) => (
            <FactCard key={fact.id} {...fact} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default MainPage;
