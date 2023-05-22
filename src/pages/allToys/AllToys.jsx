import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/auth";
import Aos from "aos";

const AllToys = () => {
  const [toys, setToys] = useState(useLoaderData());
  // console.table(toys);
  //   console.table(toys.reverse());

  useEffect(() => {
    Aos.init();
  }, []);
  // Context
  const { loading } = useContext(AuthContext);

  const handleSearch = (e) => {
    e.preventDefault();
    const keyword = e.target.searchInput.value;

    if (keyword) {
      // loading(true);

      fetch(`${import.meta.env.VITE_API}/toys/search/${keyword}`)
        .then((res) => res.json())
        .then((data) => {
          setToys(data);
          // console.log("====>", data);
          // loading(false);
        })
        .catch((error) => {
          console.log(error);
          // loading(false);
        });
    }
  };

  return (
    <section data-aos="fade-right" data-aos-offset="300" className="mt-44">
      <div className="container mx-auto px-3">
        <div className="lg:w-full xl:w-4/5 mx-auto bg-slate-100 dark:bg-slate-800 border dark:border-slate-800 p-6 shadow-xl rounded-xl">
          <div className="mb-8 flex justify-end">
            <form onSubmit={handleSearch}>
              <div className="form-control">
                <div className="input-group">
                  <input
                    type="text"
                    name="searchInput"
                    placeholder="Search Toys..."
                    className="input input-bordered sm:w-80 max-w-full"
                  />
                  <button type="submit" className="btn btn-square">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>SL No</th>
                  <th>Image</th>
                  <th>Toy Name</th>
                  <th>Seller Name</th>
                  <th>Sub Category</th>
                  <th>Price</th>
                  <th>Available Qty</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {toys.map((toy, index) => (
                  <tr key={toy?._id}>
                    <th>{index + 1}</th>
                    <td>
                      <img
                        style={{ minWidth: "4rem", maxHeight: "5rem" }}
                        className="max-w-full object-cover"
                        src={toy?.photoURL}
                        alt={toy?.toyName}
                      />
                    </td>
                    <td>{toy?.toyName}</td>
                    <td>{toy?.sellerName}</td>
                    <td>{toy?.subCategory}</td>
                    <td>${toy?.price}</td>
                    <td>{toy?.availableQuantity}</td>
                    <td>
                      <Link to={`/toys/${toy?._id}`} className="btn btn-accent">
                        View Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllToys;
