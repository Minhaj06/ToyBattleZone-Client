import React from "react";
import { useLoaderData } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import Title from "../../components/title/Title";

const ToyDetailsPage = () => {
  const {
    _id,
    sellerName,
    sellerEmail,
    toyName,
    subCategory,
    photoURL,
    rating,
    price,
    availableQuantity,
    description,
  } = useLoaderData();

  //   console.log(
  //     _id,
  //     sellerName,
  //     sellerEmail,
  //     toyName,
  //     subCategory,
  //     photoURL,
  //     rating,
  //     price,
  //     availableQuantity,
  //     description
  //   );

  return (
    <>
      <Title title={`Toy - ${toyName}`} />
      <section className="mt-44 mb-24">
        <div className="container mx-auto px-3">
          <div className="lg:w-full xl:w-4/5 mx-auto bg-slate-100 dark:bg-slate-800 border dark:border-slate-800 p-6 shadow-xl rounded-xl">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 mb-4 md:mb-0">
                <img src={photoURL} alt={toyName} className="w-full h-auto rounded-lg" />
              </div>
              <div className="md:w-2/3 md:pl-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  {toyName}
                </h2>
                <p className="text-gray-700 text-lg dark:text-gray-300 mb-4">
                  <span className="font-semibold">Seller: </span> {sellerName}
                </p>
                <p className="text-gray-700 text-lg dark:text-gray-300 mb-4">
                  <span className="font-semibold">Seller Email: </span> {sellerEmail}
                </p>
                <p className="text-gray-700 text-lg dark:text-gray-300 mb-4">
                  <span className="font-semibold">Sub-category: </span>
                  {subCategory}
                </p>
                <p className="text-gray-700 text-lg dark:text-gray-300 mb-4">
                  <span className="font-semibold">Sub-category: </span>
                  <span className="font-semibold">${price}</span>
                </p>
                <p className="text-gray-700 text-lg dark:text-gray-300 mb-4 flex items-center">
                  <span className="font-semibold mr-2">Rating: </span>
                  {rating}
                  <span className="inline-block text-amber-500 ">
                    <AiFillStar size={18} />
                  </span>
                </p>
                <p className="text-gray-700 text-lg dark:text-gray-300 mb-4">
                  <span className="font-semibold">Available Quantity: </span>
                  {availableQuantity}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">Description:</span>
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ToyDetailsPage;
