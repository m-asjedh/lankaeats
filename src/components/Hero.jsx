import React from "react";
import hero from "../assets/hero.webp";

const Hero = () => {
  return (
    <div className="h-screen mx-auto p-4">
      <div className="h-full relative">
        <div className="absolute w-full h-full text-gray-200 bg-black/50 flex flex-col justify-center">
          <h1 className="px-4 text-4xl smk:text-5xl md:text-6xl lg:text-7xl font-bold">
            The
            <span className="text-orange-500 ml-4">Best</span>
          </h1>
          <h1 className="px-4 text-4xl smk:text-5xl md:text-6xl lg:text-7xl font-bold">
            <span className="text-orange-500 mr-4">Food</span>
            Delivery
          </h1>
        </div>
        <img className="w-full h-full object-cover" src={hero} alt="/" />
      </div>
    </div>
  );
};

export default Hero;
