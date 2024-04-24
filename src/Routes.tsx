import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/customer/home/Home";
import Login from "./pages/customer/login/Login";
import Products from "./pages/customer/products/Products";
import About from "./pages/customer/about/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
