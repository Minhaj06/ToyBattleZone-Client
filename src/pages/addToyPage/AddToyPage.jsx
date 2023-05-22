import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../context/auth";
import { toast } from "react-hot-toast";
import Aos from "aos";

const AddToyPage = () => {
  const { user, loading } = useContext(AuthContext);

  useEffect(() => {
    Aos.init();
  }, []);

  const handleAddToy = (e) => {
    e.preventDefault();

    loading(true);

    const form = e.target;

    const sellerName = user.displayName;
    const sellerEmail = user.email;

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

    // console.log(photoURL, toyName, price, rating, availableQuantity, description);

    if (!photoURL || !toyName || !price || !rating || !availableQuantity || !description) {
      toast.error("Fill up all the fields");
    } else {
      //   console.log(toy);
      fetch(`${import.meta.env.VITE_API}/toy`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(toy),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            toast.success("Toy Added Successfully");
            form.reset();
            loading(false);
          } else {
            toast.error("Something went wrong! Try again");
            loading(false);
          }
        });
    }
  };

  return (
    <section data-aos="fade-right" data-aos-offset="300" className="mt-44">
      <div className="container mx-auto px-3">
        <div className="sm:w-4/5 md:w-3/4 lg:w-full xl:w-4/5 mx-auto bg-slate-100 dark:bg-slate-800 border dark:border-slate-800 p-6 shadow-xl rounded-xl">
          <form onSubmit={handleAddToy}>
            <h2 className="text-3xl font-semibold text-center mb-4">Add A Toy</h2>

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
                />
              </div>
              <div className="form-control hidden">
                <label className="label">
                  <span className="label-text text-lg">Seller Name</span>
                </label>
                <input
                  name="sellerName"
                  type="text"
                  placeholder="Enter seller name"
                  className="input input-bordered text-lg"
                />
              </div>
              <div className="form-control hidden">
                <label className="label">
                  <span className="label-text text-lg">Seller Email</span>
                </label>
                <input
                  name="sellerEmail"
                  type="email"
                  placeholder="Enter seller email"
                  className="input input-bordered text-lg"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg">Select Sub Category</span>
                </label>
                <select
                  name="subCategory"
                  className="select select-bordered w-full text-lg font-normal"
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
                  max={5}
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
                />
              </div>
              <div className="form-control col-span-2">
                <label className="label">
                  <span className="label-text text-lg">Detail Description</span>
                </label>
                <textarea
                  name="description"
                  className="textarea textarea-bordered text-lg"
                  placeholder="Toy description"
                  rows={4}
                ></textarea>
              </div>
            </div>
            <div className="text-right">
              <button type="submit" className="btn btn-primary tracking-widest px-8 mt-6">
                Add Toy
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddToyPage;
