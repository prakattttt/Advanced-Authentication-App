import React from "react";
import background from "../assets/background.jpg";
import webDevFacts from "../utils/facts.jsx";
import FactCard from "../components/FactCard.jsx";
import useAuth from "../../hooks/useAuth.jsx";

const MainPage = () => {
  const { user } = useAuth();
  return (
    <main
      role="main"
      className="min-h-screen bg-cover bg-center text-white relative"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute inset-0 bg-black/40" >

      <div className="flex items-center m-10 max-lg:m-7">
        <span className="relative inline-flex items-center justify-center w-10 h-10 border-2 border-white rounded-md font-extrabold text-2xl">
          <span className="absolute inset-0 bg-white blur-sm -z-10 rounded-md"></span>
          A
        </span>
        <span className="ml-3 text-2xl font-bold">Authenticator</span>
      </div>

        <div className="mx-10 mt-6 max-lg:mx-7">
          <h1 className="text-5xl font-bold max-lg:text-3xl max-mid:text-2xl">
            Welcome back,{" "}
            <span className="underline underline-offset-4 decoration-white">
              {user}
            </span>
            !
          </h1>
          <p className="mt-3 text-xl text-gray-300 max-lg:text-base">
            Here's what's shaping the world of web development in 2026.
          </p>
        </div>

        <div className="mx-10 my-8 border-t border-white/20 max-lg:mx-7" />

        <div className="mx-10 mb-12 grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-mid:grid-cols-1 max-lg:mx-7">
          {webDevFacts.map((fact) => (
            <FactCard key={fact.id} {...fact} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default MainPage;
