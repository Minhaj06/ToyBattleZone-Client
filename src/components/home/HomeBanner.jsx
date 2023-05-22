import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";

const HomeBanner = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      data-aos="fade-top"
      data-aos-duration="600"
      data-aos-offset="400"
      className="relative bg-gray-900 mt-16"
    >
      <div className="relative overflow-hidden">
        <img
          style={{ height: "calc(100vh - 4rem)" }}
          className="w-full object-cover object-center"
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
