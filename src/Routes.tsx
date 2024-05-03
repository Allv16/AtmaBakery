import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/customer/home/Home";
import Login from "./pages/customer/login/Login";
import Products from "./pages/customer/products/Products";
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
import AddRecipe from "./pages/admin/foodstuff/AddRecipe";
import Employee from "./pages/mo/employee/Employee.";
import DashboardOwner from "./pages/owner/dashboard/Dashboard";
import JobTitle from "./pages/mo/jobTitle/JobTitle";
import EditProduct from "./pages/admin/products/EditProduct";
import EditHampers from "./pages/admin/hampers/EditHampers";
import AddPromoPoints from "./pages/admin/points/AddPromoPoints";
import PromoPoints from "./pages/admin/points/PromoPoints";
import EditRecipe from "./pages/admin/foodstuff/EditRecipe";
import Partner from "./pages/mo/partner/Partner";
import AddEmployee from "./pages/mo/employee/AddEmployee";
import EditEmployee from "./pages/mo/employee/EditEmployee";
import AddPartner from "./pages/mo/partner/AddPartner";
import EditPartner from "./pages/mo/partner/EditPartner";
import AddJobTitle from "./pages/mo/jobTitle/AddJobTitle";
import EditJobTitle from "./pages/mo/jobTitle/EditJobTitle";
import OwnerEmployee from "./pages/owner/employee/OwnerEmployee";
import EditOwnerEmployee from "./pages/owner/employee/EditOwnerEmployee";

import DetailProduct from "./pages/admin/products/DetailProduct";
import DetailRecipe from "./pages/admin/foodstuff/DetailRecipe";
import AddMyProduct from "./pages/admin/products/AddMyProduct";
import AddConsignment from "./pages/admin/products/AddConsginment";
import MaterialPurchase from "./pages/mo/material/MaterialPurchase";
import OtherExpenses from "./pages/mo/other-expenses/OtherExpenses";
import Attendance from "./pages/mo/attendance/Attendance";

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
    path: "/admin-dashboard",
    element: <Dashboard />,
  },
  {
    path: "/admin-hampers",
    element: <Hampers />,
  },
  {
    path: "/add-hampers",
    element: <AddHampers />,
  },
  {
    path: "/edit-hampers",
    element: <EditHampers />,
  },
  {
    path: "/admin-products",
    element: <AdminProducts />,
  },
  {
    path: "/add-my-products",
    element: <AddMyProduct />,
  },
  {
    path: "/add-consignment-products",
    element: <AddConsignment />,
  },
  {
    path: "/edit-products",
    element: <EditProduct />,
  },
  {
    path: "/detail-products",
    element: <DetailProduct />,
  },
  {
    path: "/admin-ingredients",
    element: <Ingredients />,
  },
  {
    path: "/add-ingredients",
    element: <AddIngredients />,
  },
  {
    path: "/edit-ingredients/:id",
    element: <EditIngredients />,
  },
  {
    path: "/admin-recipe",
    element: <Recipe />,
  },
  {
    path: "/add-recipe",
    element: <AddRecipe />,
  },
  {
    path: "/edit-recipe",
    element: <EditRecipe />,
  },
  {
    path: "/detail-recipe/:id",
    element: <DetailRecipe />,
  },
  {
    path: "/admin-points",
    element: <PromoPoints />,
  },
  {
    path: "/add-points",
    element: <AddPromoPoints />,
  },
  {
    path: "/mo-dashboard",
    element: <DashboardMO />,
  },
  {
    path: "/mo-employee",
    element: <Employee />,
  },
  {
    path: "/add-employee",
    element: <AddEmployee />,
  },
  {
    path: "/edit-employee",
    element: <EditEmployee />,
  },
  {
    path: "/mo-partner",
    element: <Partner />,
  },
  {
    path: "/add-partner",
    element: <AddPartner />,
  },
  {
    path: "/edit-partner",
    element: <EditPartner />,
  },
  {
    path: "/mo-job-title",
    element: <JobTitle />,
  },
  {
    path: "/add-job-title",
    element: <AddJobTitle />,
  },
  {
    path: "/edit-job-title",
    element: <EditJobTitle />,
  },
  {
    path: "/owner-dashboard",
    element: <DashboardOwner />,
  },
  {
    path: "/owner-employee",
    element: <OwnerEmployee />,
  },
  {
    path: "/edit-owner-employee",
    element: <EditOwnerEmployee />,
  },
  {
    path: "/mo-material-purchase",
    element: <MaterialPurchase />,
  },
  {
    path: "/mo-other-expenses",
    element: <OtherExpenses />,
  },
  {
    path: "/mo-attendance",
    element: <Attendance />,
  },
]);
