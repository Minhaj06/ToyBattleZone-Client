import React from "react";

const HomeBanner = () => {
  return (
    <div className="relative bg-gray-900">
      <div className="relative overflow-hidden">
        <img
          className="w-full h-full object-cover object-center"
          src="banner-image.jpg"
          alt="ToyBattleZone Banner"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Welcome to ToyBattleZone</h1>
            <p className="text-xl text-gray-300 mb-6">
              The ultimate destination for toy enthusiasts
            </p>
            <a
              href="#"
              className="inline-block bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full shadow-lg uppercase tracking-wide"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
