import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

const elements = {
  MongoDB: SiMongodb,
  ExpressJS: SiExpress,
  ReactJS: FaReact,
  NodeJS: FaNodeJs,
};

const Element = () => {
  return (
    <div className="flex items-center justify-around mt-10">
      {Object.entries(elements).map(([key, Icon]) => (
        <div key={key} className="flex flex-col text-center text-3xl font-semibold items-center  max-sm:text-[1rem] max-lg:text-xl">
          <h3 className="mb-3">{key}</h3>
          <Icon size={40} />
        </div>
      ))}
    </div>
  );
};

export default Element;
