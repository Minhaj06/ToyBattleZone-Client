import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/homePage/HomePage";
import LoginPage from "../pages/loginPage/LoginPage";
import RegisterPage from "../pages/registerPage/RegisterPage";
import ProfileUpdatePage from "../pages/profileUpdatePage/ProfileUpdatePage";
import PrivateRoute from "./PrivateRoute";
import NotFoundPage from "../pages/notFoundPage/NotFoundPage";
import AddToyPage from "../pages/addToyPage/AddToyPage";
import AllToys from "../pages/allToys/AllToys";
import ToyDetailsPage from "../pages/toyDetailsPage/ToyDetailsPage";
import MyToysPage from "../pages/myToysPage/MyToysPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <ProfileUpdatePage />
          </PrivateRoute>
        ),
      },
      {
        path: "/all-toys",
        element: (
          <PrivateRoute>
            <AllToys />
          </PrivateRoute>
        ),
        loader: async () => fetch(`${import.meta.env.VITE_API}/toys`),
      },
      {
        path: "/toys/:id",
        element: (
          <PrivateRoute>
            <ToyDetailsPage />
          </PrivateRoute>
        ),
        loader: async ({ params }) => fetch(`${import.meta.env.VITE_API}/toys/${params.id}`),
      },
      {
        path: "/my-toys",
        element: (
          <PrivateRoute>
            <MyToysPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-toy",
        element: (
          <PrivateRoute>
            <AddToyPage />
          </PrivateRoute>
        ),
      },
    ],
    errorElement: <NotFoundPage />,
  },
]);

export default router;
