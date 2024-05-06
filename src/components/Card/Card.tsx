import React from "react";
import { IProduct } from "../../lib/interfaces/IProducts";
import { IRecipe } from "../../lib/interfaces/IRecipe";
import { IHampers } from "../../lib/interfaces/IHampers";
import { useLocation, useNavigate } from "react-router-dom";

type CardProductProps = {
  product: IProduct;
};

type CardHampersProps = {
  hampers: IHampers;
};

export const CardProduct: React.FC<CardProductProps> = ({ product }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleDetail = () => {
    if (location.pathname.includes("admin-products")) {
      navigate("/detail-products");
    }
  };

  const handleEdit = () => {
    if (location.pathname.includes("admin-products")) {
      navigate("/edit-products");
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer">
      <div className="flex justify-center items-center">
        <img
          className="h-50 aspect-square object-cover "
          src={product.foto}
          alt={product.nama_produk}
          onClick={handleDetail}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg text-black font-medium">
          {product.nama_produk}
        </h3>
        <p className="text-gray-600">{product.harga}</p>
        <hr />
        <div className="flex justify-end p-1">
          <div className="dropdown dropdown-top dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-sm m-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-ellipsis"
              >
                <circle cx="12" cy="12" r="1" />
                <circle cx="19" cy="12" r="1" />
                <circle cx="5" cy="12" r="1" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <button onClick={handleEdit}>Edit</button>
              </li>
              <li>
                <a>Delete</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CardHampers = (props: CardHampersProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        className="w-full h-50 object-cover"
        src={props.hampers.hampers.foto}
        alt={props.hampers.hampers.nama_produk}
      />
      <div className="p-4">
        <h3 className="text-lg font-medium">
          {props.hampers.hampers.nama_produk}
        </h3>
        <p className="text-gray-600 mb-4">{props.hampers.hampers.harga}</p>
        <hr />
        <div className="flex justify-end p-1">
          <div className="dropdown dropdown-top dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-sm m-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-ellipsis"
              >
                <circle cx="12" cy="12" r="1" />
                <circle cx="19" cy="12" r="1" />
                <circle cx="5" cy="12" r="1" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="/edit-hampers">Edit</a>
              </li>
              <li>
                <a>Delete</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CardRecipe: React.FC<CardProductProps> = ({ product }) => {
  const navigate = useNavigate();

  const handleDetailRecipe = () => {
    navigate(`/detail-recipe/${product.id_produk}`);
  };

  return (
    <div
      className="bg-white shadow-md rounded-lg overflow-hidden"
      onClick={handleDetailRecipe}
      style={{ cursor: "pointer" }}
    >
      <img
        className="w-full h-50 object-cover"
        src={product.foto}
        alt={product.nama_produk}
      />
      <div className="p-4">
        <h3 className="text-lg font-medium">{product.nama_produk}</h3>
        <p className="text-gray-600 mb-4">{product.deskripsi}</p>
      </div>
    </div>
  );
};
