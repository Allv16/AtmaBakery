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
import IngredientPurchase from "./pages/mo/ingredients/IngredientPurchase";
import AddIngredientPurchase from "./pages/mo/ingredients/AddIngredientPurchase";
import EditIngredientPurchase from "./pages/mo/ingredients/EditIngredientPurchase";
import AddOtherExpenses from "./pages/mo/other-expenses/AddExpenses";
import EditOtherExpenses from "./pages/mo/other-expenses/EditOtherExpenses";
import CustomerSearch from "./pages/admin/customer-search/CustomerSearch";
import OrderHistoryAdmin from "./pages/admin/customer-search/OrderHistory";
import OrderHistory from "./pages/customer/profile/OrderHistory";
import { Cart } from "./pages/customer/cart/Cart";
import ListProduct from "./pages/customer/products/ListProduct";
import DetailProduct from "./pages/customer/products/DetailProduct";
import HowToOrder from "./pages/customer/how-to-order/HowToOrder";
import DetailsOrder from "./pages/customer/profile/DetailsOrder";
import Invoice from "./components/invoice/Invoice";
import Checkout from "./pages/customer/checkout/checkout";
import TaskOrder from "./pages/mo/customer-order/TaskOrder";
import IngredientsUsage from "./pages/mo/ingredients-usage/IngredientsUsage";
import RejectOrder from "./pages/mo/customer-order/RejectOrder";
import ConfirmedOrder from "./pages/mo/customer-order/ConfirmedOrder";

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
    path: "/list-products",
    element: <ListProduct />,
  },
  {
    path: "/detail-product/:id",
    element: <DetailProduct />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/how-to-order",
    element: <HowToOrder />,
  },

  /*






  */
  //Admin
  {
    path: "/admin/dashboard",
    element: (
      <ProtectedRoutes role_id="2">
        <Dashboard />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/admin/hampers",
    element: (
      <ProtectedRoutes role_id="2">
        <Hampers />
      </ProtectedRoutes>
    ),
  },
  {
    path: "admin/hampers/add",
    element: (
      <ProtectedRoutes role_id="2">
        <AddHampers />
      </ProtectedRoutes>
    ),
  },
  {
    path: "admin/hampers/edit/:id",
    element: (
      <ProtectedRoutes role_id="2">
        <EditHampers />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/admin/products",
    element: (
      <ProtectedRoutes role_id="2">
        <AdminProducts />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/admin/products/add",
    element: (
      <ProtectedRoutes role_id="2">
        <AddMyProduct />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/admin/consignment/add",
    element: (
      <ProtectedRoutes role_id="2">
        <AddConsignment />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/admin/products/edit/:id",
    element: (
      <ProtectedRoutes role_id="2">
        <EditProduct />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/admin/ingredients",
    element: (
      <ProtectedRoutes role_id="2">
        <Ingredients />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/admin/ingredients/add",
    element: (
      <ProtectedRoutes role_id="2">
        <AddIngredients />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/admin/ingredients/edit/:id",
    element: (
      <ProtectedRoutes role_id="2">
        <EditIngredients />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/admin/recipe",
    element: (
      <ProtectedRoutes role_id="2">
        <Recipe />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/admin/recipe/details/:id",
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
    path: "/admin/customer",
    element: (
      <ProtectedRoutes role_id="2">
        <CustomerSearch />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/admin/customer/order-history/:id",
    element: (
      <ProtectedRoutes role_id="2">
        <OrderHistoryAdmin />
      </ProtectedRoutes>
    ),
  },

  /*
 
  









  */

  //Manager Operasional
  {
    path: "/mo/dashboard",
    element: (
      <ProtectedRoutes role_id="3">
        <DashboardMO />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/mo/employee",
    element: (
      <ProtectedRoutes role_id="3">
        <Employee />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/mo/employee/add",
    element: (
      <ProtectedRoutes role_id="3">
        <AddEmployee />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/mo/employee/edit/:id",
    element: (
      <ProtectedRoutes role_id="3">
        <EditEmployee />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/mo/partner",
    element: (
      <ProtectedRoutes role_id="3">
        <Partner />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/mo/partner/add",
    element: (
      <ProtectedRoutes role_id="3">
        <AddPartner />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/mo/partner/edit/:id",
    element: (
      <ProtectedRoutes role_id="3">
        <EditPartner />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/mo/job-title",
    element: (
      <ProtectedRoutes role_id="3">
        <JobTitle />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/mo/job-title/add",
    element: (
      <ProtectedRoutes role_id="3">
        <AddJobTitle />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/mo/job-title/edit",
    element: (
      <ProtectedRoutes role_id="3">
        <EditJobTitle />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/mo/ingredient-purchase",
    element: (
      <ProtectedRoutes role_id="3">
        <IngredientPurchase />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/mo/ingredient-purchase/add",
    element: (
      <ProtectedRoutes role_id="3">
        <AddIngredientPurchase />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/mo/ingredient-purchase/edit/:id",
    element: (
      <ProtectedRoutes role_id="3">
        <EditIngredientPurchase />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/mo/other-expenses",
    element: (
      <ProtectedRoutes role_id="3">
        <OtherExpenses />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/mo/other-expenses/add",
    element: (
      <ProtectedRoutes role_id="3">
        <AddOtherExpenses />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/mo/other-expenses/edit/:id",
    element: (
      <ProtectedRoutes role_id="3">
        <EditOtherExpenses />
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
    path: "/mo/task-order",
    element: (
      <ProtectedRoutes role_id="3">
        <TaskOrder />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/mo/report/ingredients-usage",
    element: (
      <ProtectedRoutes role_id="3">
        <IngredientsUsage />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/mo/reject-order",
    element: (
      <ProtectedRoutes role_id="3">
        <RejectOrder />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/mo/confirmed-order",
    element: (
      <ProtectedRoutes role_id="3">
        <ConfirmedOrder />
      </ProtectedRoutes>
    ),
  },

  /*
 
  






  


  */
  //Owner
  {
    path: "/owner/dashboard",
    element: (
      <ProtectedRoutes role_id="1">
        <DashboardOwner />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/owner/employees",
    element: (
      <ProtectedRoutes role_id="1">
        <OwnerEmployee />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/owner/employee/edit/:id",
    element: (
      <ProtectedRoutes role_id="1">
        <EditOwnerEmployee />
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

  /*







  */
  //Customer
  {
    path: "/u/profile",
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
    path: "/u/transactions",
    element: (
      <ProtectedRoutes role_id="4">
        <OrderHistory />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/details-order/:id",
    element: (
      <ProtectedRoutes role_id="4">
        <DetailsOrder />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/u/cart",
    element: (
      <ProtectedRoutes role_id="4">
        <Cart />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/u/checkout",
    element: (
      <ProtectedRoutes role_id="4">
        <Checkout />
      </ProtectedRoutes>
    ),
  },
]);
