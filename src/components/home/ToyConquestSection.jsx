import React from "react";
import { Link } from "react-router-dom";

function ToyConquestSection() {
  return (
    <section className="bg-light-theme dark:bg-dark-theme py-24">
      <div className="container mx-auto px-3">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">
          Toy Conquest: Embark on an Epic Adventure!
        </h2>
        <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-8">
          Get ready for an exhilarating battle as your favorite toys clash in an epic arena.
          Join the Toy Conquest and unleash your imagination!
        </p>
        <div className="flex justify-center">
          <Link className="btn btn-accent" to={`/all-toys`}>
            Discover Toy Collection
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ToyConquestSection;
