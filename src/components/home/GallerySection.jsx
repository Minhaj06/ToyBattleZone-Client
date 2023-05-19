import React from "react";

const GallerySection = () => {
  return (
    <section className="py-24 bg-white dark:bg-gray-900 text-neutral dark:text-white">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">Gallery</h2>
          <p className="mt-2 text-lg">Check out our exciting collection of toys in action!</p>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white rounded-lg shadow">
            <img
              src="https://via.placeholder.com/300"
              alt="Toy 1"
              className="object-cover w-full h-48 rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-medium text-gray-800">Toy 1</h3>
              <p className="mt-2">
                Description of Toy 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow">
            <img
              src="https://via.placeholder.com/300"
              alt="Toy 2"
              className="object-cover w-full h-48 rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-medium text-gray-800">Toy 2</h3>
              <p className="mt-2">
                Description of Toy 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow">
            <img
              src="https://via.placeholder.com/300"
              alt="Toy 3"
              className="object-cover w-full h-48 rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-medium text-gray-800">Toy 3</h3>
              <p className="mt-2">
                Description of Toy 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
