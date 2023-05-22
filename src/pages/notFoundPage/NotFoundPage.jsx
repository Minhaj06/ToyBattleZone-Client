import React from "react";
import { Link } from "react-router-dom";
import Title from "../../components/title/Title";

const NotFoundPage = () => {
  return (
    <>
      <Title title={`Not Found`} />
      <div className="flex items-center justify-center h-screen">
        <div className="text-center relative">
          <img
            src="https://i0.wp.com/theretronetwork.com/wp-content/uploads/2019/11/Battle-Beasts-1.jpg?resize=700%2C500&ssl=1" // Replace with the URL of your image
            alt="404 Not Found"
            className="w-screen h-screen"
          />
          <div className="absolute top-0 left-0 bg-black bg-opacity-50 text-white w-full h-full flex flex-col items-center justify-center">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-2xl mb-8 font-medium">Page Not Found</p>
            <Link to={`/`} className="btn btn-primary">
              back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
