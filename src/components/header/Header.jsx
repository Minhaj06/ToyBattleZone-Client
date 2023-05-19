import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../context/auth";

const Header = () => {
  const [theme, setTheme] = useState("");
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const userPreferredTheme = localStorage.getItem("theme");

    if (userPreferredTheme) {
      setTheme(userPreferredTheme);
    } else {
      if (prefersDarkScheme) {
        setTheme("night");
      } else {
        setTheme("cupcake");
      }
    }
  }, []);

  useEffect(() => {
    if (theme) {
      localStorage.setItem("theme", theme);
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "cupcake" ? "night" : "cupcake";
    setTheme(newTheme);
  };

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logout Successful");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <nav className="navbar bg-base-200 py-3 lg:py-4 fixed top-0 left-0 w-full z-[1030] shadow-lg">
      <div className="navbar-start gap-4 lg:gap-0">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="lg:hidden cursor-pointer hover:opacity-70 duration-150"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 20 20"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 bg-base-200 rounded-box w-52 border-2 border-gray-300 shadow-md"
          >
            <li>
              <NavLink to={`/`} className="text-xl">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={`/all-toys`} className="text-xl">
                All toys
              </NavLink>
            </li>
            <li>
              <NavLink to={`/my-toys`} className="text-xl">
                My toys
              </NavLink>
            </li>
            <li>
              <NavLink to={`/add-toy`} className="text-xl">
                Add a toy
              </NavLink>
            </li>
            <li>
              <NavLink to={`/blogs`} className="text-xl">
                Blogs
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink to={``} className="font-bold normal-case text-3xl">
          Toy<span className="text-primary">Battle</span>Zone
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2 font-medium">
          <li>
            <NavLink to={`/`} className="text-xl">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={`/all-toys`} className="text-xl">
              All toys
            </NavLink>
          </li>
          <li>
            <NavLink to={`/my-toys`} className="text-xl">
              My toys
            </NavLink>
          </li>
          <li>
            <NavLink to={`/add-toy`} className="text-xl">
              Add a toy
            </NavLink>
          </li>
          <li>
            <NavLink to={`/blogs`} className="text-xl">
              Blogs
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            {user?.photoURL ? (
              <div className="w-12 rounded-full bg-slate-400">
                <img title={user?.displayName || user?.email} src={user?.photoURL} />
              </div>
            ) : (
              <RxAvatar size={42} />
            )}
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 menu menu-compact dropdown-content rounded-box w-52 bg-base-200 border-2 border-gray-300 shadow-md"
          >
            {user && (
              <li>
                <Link to={`/profile`} className="text-lg">
                  Profile
                </Link>
              </li>
            )}
            <li>
              <Link to={`#`} className="text-lg" onClick={toggleTheme}>
                Switch to:{" "}
                {theme === "night" ? (
                  <BsFillSunFill className="text-white" size={20} />
                ) : (
                  <BsFillMoonStarsFill size={17} />
                )}
              </Link>
            </li>
            {user ? (
              <>
                <li>
                  <Link to={`/profile`} className="text-lg">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link onClick={handleLogout} to={`#`} className="text-lg">
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to={`/login`} className="text-lg">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to={`/register`} className="text-lg">
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
