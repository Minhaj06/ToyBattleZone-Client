import React, { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../context/auth";
import Aos from "aos";
import Title from "../../components/title/Title";

const RegisterPage = () => {
  const { createUser, updateUser, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    Aos.init();
  }, []);

  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    if (!name) {
      toast.error("Name is required");
      return;
    } else if (!email) {
      toast.error("Email is required");
      return;
    } else if (!photoURL) {
      toast.error("Photo URL is required");
      return;
    } else if (!password) {
      toast.error("Password is required");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        updateUser(name, photoURL);
        console.log(createdUser);
        form.reset();
        loading(false);
        toast.success("Registration successful");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        loading(false);
        toast.error(error.message);
      });
  };

  return (
    <>
      <Title title={`Register`} />
      <section data-aos="fade-right" data-aos-offset="300" className="mt-44 mb-24">
        <div className="container mx-auto px-3">
          <div className="sm:w-3/4 lg:w-1/2 xl:w-1/3 mx-auto bg-slate-100 dark:bg-slate-800 border dark:border-slate-800 p-6 shadow-xl rounded-xl">
            <form onSubmit={handleRegister}>
              <h2 className="text-3xl font-semibold text-center mb-4">Register</h2>

              <div className="form-control mb-3">
                <label className="label">
                  <span className="label-text text-lg">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered text-lg"
                />
              </div>
              <div className="form-control mb-3">
                <label className="label">
                  <span className="label-text text-lg">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Type here"
                  className="input input-bordered text-lg"
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
                />
              </div>
              <div className="form-control mb-3">
                <label className="label">
                  <span className="label-text text-lg">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="Type here"
                  className="input input-bordered text-lg"
                />
              </div>
              <p>
                Already have an account?{" "}
                <Link to="/login" className="btn btn-link">
                  Login
                </Link>
              </p>
              <button type="submit" className="btn btn-primary btn-block mt-6">
                Register Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterPage;
