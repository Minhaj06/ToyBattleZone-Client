import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/homePage/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
    errorElement: <h1>404</h1>,
  },
]);

export default router;
