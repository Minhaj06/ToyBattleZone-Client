import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth";

const ToyCard = ({ toy }) => {
  const { user } = useContext(AuthContext);

  const { _id, toyName, description, rating, photoURL } = toy;

  return (
    <div className="bg-white dark:bg-base-100 rounded-xl shadow-md overflow-hidden">
      <div className="sm:flex h-full">
        <div className="sm:flex-shrink-0">
          <img
            className="sm:h-full w-full object-cover sm:w-48"
            src={photoURL}
            alt={toyName}
          />
        </div>
        <div className="p-6">
          <h4 className="block mt-1 text-lg leading-tight font-medium text-gray-900 dark:text-gray-200">
            {toyName}
          </h4>
          <p className="mt-2 text-gray-500 dark:text-gray-300">
            {description.substring(0, 100)}
          </p>
          <div className="mt-4">
            <span className="text-gray-900 dark:text-gray-200 font-bold">Rating: </span>
            {rating}
          </div>
          <div className="mt-4">
            <Link
              onClick={() => {
                !user && toast.error("You have to log in first to view details.");
              }}
              to={`/toys/${_id}`}
              className="btn btn-outline btn-primary"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
