import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/customer/home/Home";
import Login from "./pages/customer/login/Login";
import Products from "./pages/customer/products/Products";
import About from "./pages/customer/about/About";
import Register from "./pages/customer/register/Register";
import ForgotPassword from "./pages/customer/forgot-password/ForgotPassword";
import ResetPassword from "./pages/customer/reset-password/ResetPassword";
import Profile from "./pages/customer/profile/Profile";
import AddressList from "./pages/customer/profile/AddressList";

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
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/address-list",
    element: <AddressList />,
  },
]);
