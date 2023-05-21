import React from "react";
import { Link } from "react-router-dom";

const ToyCard = ({ toy }) => {
  console.log(toy);

  const { _id, toyName, description, rating, photoURL } = toy;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="sm:flex h-full">
        <div className="sm:flex-shrink-0">
          <img
            className="sm:h-full w-full object-cover sm:w-48"
            src={photoURL}
            alt={toyName}
          />
        </div>
        <div className="p-6">
          <Link
            to={`/toys/${_id}`}
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            {toyName}
          </Link>
          <p className="mt-2 text-gray-500">{description.substring(0, 100)}</p>
          <div className="mt-4">
            <span className="text-gray-900 font-bold">Rating: </span>
            {rating}
          </div>
          <div className="mt-4">
            <Link to={`/toys/${_id}`} className="btn btn-outline btn-primary">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
