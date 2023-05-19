import React from "react";
import { Link } from "react-router-dom";

const HomeBanner = () => {
  return (
    <div className="relative bg-gray-900">
      <div className="relative overflow-hidden">
        <img
          className="w-full h-screen object-cover object-center"
          src="https://www.shutterstock.com/image-photo/colorful-plastic-pipe-attraction-sliders-260nw-1293218803.jpg"
          alt="ToyBattleZone Banner"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl xl:text-6xl font-bold text-white mb-4">
              Welcome to ToyBattleZone
            </h1>
            <p className="text-xl xl:text-2xl text-gray-300 mb-6">
              The ultimate destination for toy enthusiasts
            </p>
            <Link
              to="#"
              className="btn btn-primary font-bold py-3 px-6 rounded-full shadow-lg uppercase tracking-wide"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
