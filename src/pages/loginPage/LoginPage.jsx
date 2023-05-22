import React, { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../context/auth";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import app from "../../firebase/firebase.config";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import Aos from "aos";

const LoginPage = () => {
  const { logIn, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    Aos.init();
  }, []);

  // Social Login
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const handleLoginWithGoogle = () => {
    loading(true);

    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        loading(false);
        navigate(from, { replace: true });
        toast.success("Successfully Logged In");
      })
      .catch((error) => {
        loading(false);
        toast.error(error.message);
      });
  };

  const handleLoginWithFacebook = () => {
    loading(true);

    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        const user = result.user;
        loading(false);
        navigate(from, { replace: true });
        toast.success("Successfully Logged In");
      })
      .catch((error) => {
        loading(false);
        toast.error(error.message);
      });
  };

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;

    if (!email) {
      toast.error("Email is required");
      return;
    } else if (!password) {
      toast.error("Password is required");
      return;
    }

    logIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        loading(false);
        toast.success("Login successful");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        loading(false);
        toast.error(error.message);
      });
  };

  return (
    <section data-aos="fade-right" data-aos-offset="300" className="mt-44">
      <div className="container mx-auto px-3">
        <div className="sm:w-3/4 lg:w-1/2 xl:w-1/3 mx-auto bg-slate-100 dark:bg-slate-800 p-6 border dark:border-slate-800 shadow-xl rounded-xl">
          <form onSubmit={handleLogin}>
            <h2 className="text-3xl font-semibold text-center mb-4">Login</h2>

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
              Don't have an account?{" "}
              <Link to="/register" className="btn btn-link">
                Register Now
              </Link>
            </p>
            <button type="submit" className="btn btn-primary btn-block mt-6">
              Login Now
            </button>
          </form>
          <div className="divider">OR</div>
          <div className="text-center">
            <button
              onClick={handleLoginWithGoogle}
              className="btn btn-outline btn-success btn-block mb-4"
            >
              <FcGoogle className="me-2" size={20} />
              Login With Google
            </button>
            <button
              onClick={handleLoginWithFacebook}
              className="btn btn-outline btn-info btn-block"
            >
              <BsFacebook className="me-2" size={20} />
              Login With Facebook
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
