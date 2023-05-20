import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth";
import { FaEye } from "react-icons/fa";
import { AiOutlineEdit } from "react-icons/ai";
import { HiOutlineTrash } from "react-icons/hi";

const MyToysPage = () => {
  const [toys, setToys] = useState([]);

  const navigate = useNavigate();

  // Context
  const { user, loading } = useContext(AuthContext);
  const { email } = user;
  const loadToys = async () => {
    console.log(email);
    fetch(`${import.meta.env.VITE_API}/toysBySeller/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  };

  useEffect(() => {
    loadToys();
  }, []);

  return (
    <section className="mt-44">
      <div className="container mx-auto px-3">
        <div className="lg:w-full xl:w-4/5 mx-auto bg-slate-100 dark:bg-slate-800 border dark:border-slate-800 p-6 shadow-xl rounded-xl">
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>SL No</th>
                  <th>Image</th>
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
                        className="w-full h-20 object-cover"
                        src={toy?.photoURL}
                        alt={toy?.toyName}
                      />
                    </td>
                    <td>{toy?.sellerName}</td>
                    <td>{toy?.subCategory}</td>
                    <td>${toy?.price}</td>
                    <td>{toy?.availableQuantity}</td>
                    <td>
                      <div className="btn-group">
                        <button
                          onClick={() => navigate(`/toys/${toy?._id}`)}
                          className="btn btn-primary"
                        >
                          <FaEye size={19} />
                        </button>
                        <button className="btn btn-secondary">
                          <AiOutlineEdit size={19} />
                        </button>
                        <button className="btn btn-warning">
                          <HiOutlineTrash size={19} />
                        </button>
                      </div>
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

export default MyToysPage;
