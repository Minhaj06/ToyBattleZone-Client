import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <h1>Home Page</h1>,
      },
    ],
    errorElement: <h1>404</h1>,
  },
]);

export default router;
