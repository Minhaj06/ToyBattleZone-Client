import React, { useContext, useEffect } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../context/auth";
import Aos from "aos";

const ProfileUpdatePage = () => {
  const { user, updateUser, loading } = useContext(AuthContext);

  useEffect(() => {
    Aos.init();
  }, []);

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    loading(true);

    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;

    updateUser(name, photoURL)
      .then(() => {
        loading(false);
        toast.success("Profile updated successfully");
      })
      .catch((error) => {
        console.log(error);
        loading(false);
        toast.error(error.message);
      });
  };

  return (
    <section data-aos="fade-right" data-aos-offset="300" className="mt-44">
      <div className="container mx-auto px-3">
        <div className="sm:w-3/4 lg:w-1/2 xl:w-1/3 mx-auto bg-slate-100 dark:bg-slate-800 border dark:border-slate-800 p-6 shadow-xl rounded-xl">
          <form>
            <h2 className="text-3xl font-semibold text-center mb-4">Update Profile</h2>

            <div className="form-control mb-3">
              <label className="label">
                <span className="label-text text-lg">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Type here"
                className="input input-bordered text-lg"
                defaultValue={user?.displayName}
              />
            </div>
            <div className="form-control mb-3">
              <label className="label">
                <span className="label-text text-lg">Photo URL</span>
              </label>
              <input
                name="photoURL"
                type="url"
                placeholder="Type here"
                className="input input-bordered text-lg"
                defaultValue={user?.photoURL}
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block mt-6">
              Update Profile
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProfileUpdatePage;
