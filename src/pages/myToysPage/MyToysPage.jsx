import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth";
import { FaEye } from "react-icons/fa";
import { AiOutlineEdit } from "react-icons/ai";
import { HiOutlineTrash } from "react-icons/hi";
import { toast } from "react-hot-toast";
import Modal from "../../components/modal/Modal";
import Swal from "sweetalert2";

const MyToysPage = () => {
  const [toys, setToys] = useState([]);
  const [updateToy, setUpdateToy] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Context
  const { user, loading } = useContext(AuthContext);
  const { email, displayName } = user;
  const loadToys = async () => {
    fetch(`${import.meta.env.VITE_API}/toysBySeller/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  };

  useEffect(() => {
    loadToys();
  }, []);

  const handleDeleteToy = (toyId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_API}/toysBySeller/${email}/${toyId}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            const restToys = toys.filter((toy) => toy._id !== toyId);
            setToys(restToys);
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          })
          .catch((error) => {
            console.log(error);
            Swal.fire("Not deleted!", "Something went wrong.", "danger");
          });
      }
    });
  };

  const handleUpdateToy = (e) => {
    e.preventDefault();

    loading(true);

    const form = e.target;

    const sellerName = displayName;
    const sellerEmail = email;

    const id = updateToy?._id;
    const photoURL = form.photoURL.value;
    const toyName = form.toyName.value;
    const subCategory = form.subCategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const availableQuantity = form.availableQuantity.value;
    const description = form.description.value;

    const toy = {
      photoURL,
      toyName,
      sellerName,
      sellerEmail,
      subCategory,
      price,
      rating,
      availableQuantity,
      description,
    };
    if (!photoURL || !toyName || !price || !rating || !availableQuantity || !description) {
      toast.error("Fill up all the fields");
    } else {
      //   console.log(toy);
      fetch(`${import.meta.env.VITE_API}/toysBySeller/${sellerEmail}/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(toy),
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success("Toy Added Successfully");
          form.reset();
          loading(false);
        })
        .catch((error) => {
          console.log(error);
          loading(false);
        });
    }
  };

  const handleClickUpdateModal = (toyId) => {
    openModal();
    const filteredToy = toys.find((toy) => toy._id === toyId);
    setUpdateToy(filteredToy);
  };

  const handleSortToys = (event) => {
    const value = event.target.value;
    if (value == "null") {
      return;
    } else if (value === "priceLowToHigh") {
      const sortedToys = [...toys].sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      setToys(sortedToys);
    } else if (value === "priceHighToLow") {
      const sortedToys = [...toys].sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
      setToys(sortedToys);
    } else if (value === "ratingLowToHigh") {
      const sortedToys = [...toys].sort((a, b) => parseFloat(a.rating) - parseFloat(b.rating));
      setToys(sortedToys);
    } else if (value === "ratingHighToLow") {
      const sortedToys = [...toys].sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
      setToys(sortedToys);
    } else if (value === "alphabetically_A_Z") {
      const sortedToys = [...toys].sort((a, b) => a.toyName.localeCompare(b.toyName));
      setToys(sortedToys);
    } else if (value === "alphabetically_Z_A") {
      const sortedToys = [...toys].sort((a, b) => b.toyName.localeCompare(a.name));
      setToys(sortedToys);
    }
  };

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <form onSubmit={handleUpdateToy}>
          <h2 className="text-3xl font-bold text-center mb-4">Update Toy</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-3">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Photo URL</span>
              </label>
              <input
                name="photoURL"
                type="url"
                placeholder="Enter photo URL"
                className="input input-bordered text-lg"
                defaultValue={updateToy?.photoURL}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Toy Name</span>
              </label>
              <input
                name="toyName"
                type="text"
                placeholder="Enter toy name"
                className="input input-bordered text-lg"
                defaultValue={updateToy?.toyName}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Select Sub Category</span>
              </label>
              <select
                name="subCategory"
                className="select select-bordered w-full text-lg font-normal"
                defaultValue={updateToy?.subCategory}
              >
                <option value="Marvel">Marvel</option>
                <option value="Star Wars">Star Wars</option>
                <option value="Transformers">Transformers</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Price</span>
              </label>
              <input
                name="price"
                placeholder="Enter price"
                className="input input-bordered text-lg"
                min={0}
                defaultValue={updateToy?.price}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Rating</span>
              </label>
              <input
                name="rating"
                placeholder="Enter rating"
                className="input input-bordered text-lg"
                min={0}
                defaultValue={updateToy?.rating}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Available Quantity</span>
              </label>
              <input
                name="availableQuantity"
                type="number"
                placeholder="Enter Availabe Quantity"
                className="input input-bordered text-lg"
                min={0}
                defaultValue={updateToy?.availableQuantity}
              />
            </div>
            <div className="form-control lg:col-span-2">
              <label className="label">
                <span className="label-text text-lg">Detail Description</span>
              </label>
              <textarea
                name="description"
                className="textarea textarea-bordered text-lg"
                placeholder="Toy description"
                rows={4}
                defaultValue={updateToy?.description}
              ></textarea>
            </div>
          </div>
          <div className="text-right">
            <button type="submit" className="btn btn-primary tracking-widest px-8 mt-6">
              Update Toy
            </button>
          </div>
        </form>
      </Modal>
      <section className="mt-44">
        <div className="container mx-auto px-3">
          <div className="lg:w-full xl:w-4/5 mx-auto bg-slate-100 dark:bg-slate-800 border dark:border-slate-800 p-6 shadow-xl rounded-xl">
            <div className="mb-8 flex justify-end">
              <select
                onChange={handleSortToys}
                className="select select-bordered w-full max-w-xs"
              >
                <option value="null">Sort By</option>
                <option value="priceLowToHigh">Price, low to high</option>
                <option value="priceHighToLow">Price, hight to low</option>
                <option value="ratingLowToHigh">Rating, low to high</option>
                <option value="ratingHighToLow">Rating, hight to low</option>
                <option value="alphabetically_A_Z">Alphabetically, A-Z</option>
                <option value="alphabetically_Z_A">Alphabetically, Z-A</option>
              </select>
            </div>
            <div className="overflow-x-auto">
              <table className="table table-zebra w-full">
                {/* head */}
                <thead>
                  <tr>
                    <th>SL No</th>
                    <th>Image</th>
                    <th className="hidden">Seller Name</th>
                    <th>Sub Category</th>
                    <th>Price</th>
                    <th>Rating</th>
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
                      <td className="hidden">{toy?.sellerName}</td>
                      <td>{toy?.subCategory}</td>
                      <td>${toy?.price}</td>
                      <td>{toy?.rating}</td>
                      <td>{toy?.availableQuantity}</td>
                      <td>
                        <div className="btn-group">
                          <button
                            onClick={() => navigate(`/toys/${toy?._id}`)}
                            className="btn btn-primary"
                          >
                            <FaEye size={19} />
                          </button>
                          <button
                            onClick={() => handleClickUpdateModal(toy?._id)}
                            className="btn btn-secondary"
                          >
                            <AiOutlineEdit size={19} />
                          </button>
                          <button
                            onClick={() => handleDeleteToy(toy?._id)}
                            className="btn btn-warning"
                          >
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
    </>
  );
};

export default MyToysPage;
