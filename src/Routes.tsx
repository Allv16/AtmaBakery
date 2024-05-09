import { Navigate, createBrowserRouter, useRoutes } from "react-router-dom";
import Home from "./pages/customer/home/Home";
// import Login from "./pages/customer/login/Login";
// import Products from "./pages/customer/products/Products";
import About from "./pages/customer/about/About";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import Hampers from "./pages/admin/hampers/Hampers";
import AddHampers from "./pages/admin/hampers/AddHampers";
import AdminProducts from "./pages/admin/products/Products";
import Ingredients from "./pages/admin/foodstuff/Ingredients";
import AddIngredients from "./pages/admin/foodstuff/AddIngredients";
import Recipe from "./pages/admin/foodstuff/Recipe";
import DashboardMO from "./pages/mo/dashboard/DashboardMO";
import EditIngredients from "./pages/admin/foodstuff/EditIngredients";
import Employee from "./pages/mo/employee/Employee.";
import DashboardOwner from "./pages/owner/dashboard/Dashboard";
import JobTitle from "./pages/mo/jobTitle/JobTitle";
import EditProduct from "./pages/admin/products/EditProduct";
import EditHampers from "./pages/admin/hampers/EditHampers";
import AddPromoPoints from "./pages/admin/points/AddPromoPoints";
import PromoPoints from "./pages/admin/points/PromoPoints";
import Partner from "./pages/mo/partner/Partner";
import AddEmployee from "./pages/mo/employee/AddEmployee";
import EditEmployee from "./pages/mo/employee/EditEmployee";
import AddPartner from "./pages/mo/partner/AddPartner";
import EditPartner from "./pages/mo/partner/EditPartner";
import AddJobTitle from "./pages/mo/jobTitle/AddJobTitle";
import EditJobTitle from "./pages/mo/jobTitle/EditJobTitle";
import OwnerEmployee from "./pages/owner/employee/OwnerEmployee";
import EditOwnerEmployee from "./pages/owner/employee/EditOwnerEmployee";
import DetailRecipe from "./pages/admin/foodstuff/DetailRecipe";
import AddMyProduct from "./pages/admin/products/AddMyProduct";
import AddConsignment from "./pages/admin/products/AddConsignment";
import MaterialPurchase from "./pages/mo/material/MaterialPurchase";
import OtherExpenses from "./pages/mo/other-expenses/OtherExpenses";
import Attendance from "./pages/mo/attendance/Attendance";
import AdminProfile from "./pages/admin/profile/AdminProfile";
import OwnerProfile from "./pages/owner/profile/OwnerProfile";
import Profile from "./pages/customer/profile/Profile";
import AddressList from "./pages/customer/profile/AddressList";
import Login from "./pages/customer/login/Login";
import Products from "./pages/admin/products/Products";
import Register from "./pages/customer/register/Register";
import MOProfile from "./pages/mo/profile/MOProfile";
import ForgotPassword from "./pages/customer/forgot-password/ForgotPassword";
import { ReactNode } from "react";
import ProtectedRoutes from "./lib/utils/protected-routes";
import OrderHistory from "./pages/customer/profile/OrderHistory";

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
    path: "/register",
    element: <Register />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
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
    path: "/admin-dashboard",
    element: (
      <ProtectedRoutes role_id="2">
        <Dashboard />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/admin-hampers",
    element: (
      <ProtectedRoutes role_id="2">
        <Hampers />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/add-hampers",
    element: (
      <ProtectedRoutes role_id="2">
        <AddHampers />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/edit-hampers/:id",
    element: (
      <ProtectedRoutes role_id="2">
        <EditHampers />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/admin-products",
    element: (
      <ProtectedRoutes role_id="2">
        <AdminProducts />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/add-my-products",
    element: (
      <ProtectedRoutes role_id="2">
        <AddMyProduct />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/add-consignment-products",
    element: (
      <ProtectedRoutes role_id="2">
        <AddConsignment />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/edit-products/:id",
    element: (
      <ProtectedRoutes role_id="2">
        <EditProduct />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/admin-ingredients",
    element: (
      <ProtectedRoutes role_id="2">
        <Ingredients />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/add-ingredients",
    element: (
      <ProtectedRoutes role_id="2">
        <AddIngredients />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/edit-ingredients/:id",
    element: (
      <ProtectedRoutes role_id="2">
        <EditIngredients />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/admin-recipe",
    element: (
      <ProtectedRoutes role_id="2">
        <Recipe />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/detail-recipe/:id",
    element: (
      <ProtectedRoutes role_id="2">
        <DetailRecipe />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/admin-points",
    element: (
      <ProtectedRoutes role_id="2">
        <PromoPoints />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/add-points",
    element: (
      <ProtectedRoutes role_id="2">
        <AddPromoPoints />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/mo-dashboard",
    element: (
      <ProtectedRoutes role_id="3">
        <DashboardMO />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/mo-employee",
    element: (
      <ProtectedRoutes role_id="3">
        <Employee />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/add-employee",
    element: (
      <ProtectedRoutes role_id="3">
        <AddEmployee />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/edit-employee/:id",
    element: (
      <ProtectedRoutes role_id="3">
        <EditEmployee />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/mo-partner",
    element: (
      <ProtectedRoutes role_id="3">
        <Partner />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/add-partner",
    element: (
      <ProtectedRoutes role_id="3">
        <AddPartner />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/edit-partner/:id",
    element: (
      <ProtectedRoutes role_id="3">
        <EditPartner />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/mo-job-title",
    element: (
      <ProtectedRoutes role_id="3">
        <JobTitle />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/add-job-title",
    element: (
      <ProtectedRoutes role_id="3">
        <AddJobTitle />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/edit-job-title",
    element: (
      <ProtectedRoutes role_id="3">
        <EditJobTitle />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/owner-dashboard",
    element: (
      <ProtectedRoutes role_id="1">
        <DashboardOwner />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/owner-employee",
    element: (
      <ProtectedRoutes role_id="1">
        <OwnerEmployee />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/edit-owner-employee/:id",
    element: (
      <ProtectedRoutes role_id="1">
        <EditOwnerEmployee />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/mo-material-purchase",
    element: (
      <ProtectedRoutes role_id="3">
        <MaterialPurchase />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/mo-other-expenses",
    element: (
      <ProtectedRoutes role_id="3">
        <OtherExpenses />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/mo-attendance",
    element: (
      <ProtectedRoutes role_id="3">
        <Attendance />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/admin/profile",
    element: (
      <ProtectedRoutes role_id="2">
        <AdminProfile />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/mo/profile",
    element: (
      <ProtectedRoutes role_id="3">
        <MOProfile />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/owner/profile",
    element: (
      <ProtectedRoutes role_id="1">
        <OwnerProfile />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/profile",
    element: (
      <ProtectedRoutes role_id="4">
        <Profile />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/address-list",
    element: (
      <ProtectedRoutes role_id="4">
        <AddressList />
      </ProtectedRoutes>
    ),
  },

  {
    path: "/order-history",
    element: (
      <ProtectedRoutes role_id="4">
        <OrderHistory />
      </ProtectedRoutes>
    ),
  },
]);
