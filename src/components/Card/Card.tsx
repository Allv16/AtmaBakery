import React from 'react';
import { IProduct } from '../../lib/interfaces/IProducts';
import { IRecipe } from '../../lib/interfaces/IRecipe.';

interface CardProductProps {
  product: IProduct;
}

interface CardRecipeProps {
  recipe: IRecipe;
}

export const CardProduct: React.FC<CardProductProps> = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img className="w-full h-50 object-cover" src={product.image} alt={product.nama_produk} />
      <div className="p-4">
        <h3 className="text-lg font-medium">{product.nama_produk}</h3>
        <p className="text-gray-600">{product.harga}</p>
        <hr />
        <div className="flex justify-end p-1">
          <div className="dropdown dropdown-top dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-sm m-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-ellipsis"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>
            </div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li><a href="/edit-products">Edit</a></li>
              <li><a>Delete</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CardHampers: React.FC<CardProductProps> = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img className="w-full h-50 object-cover" src={product.image} alt={product.nama_produk} />
      <div className="p-4">
        <h3 className="text-lg font-medium">{product.nama_produk}</h3>
        <p className="text-gray-600 mb-4">{product.harga}</p>
        <hr />
        <div className="flex justify-end p-1">
          <div className="dropdown dropdown-top dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-sm m-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-ellipsis"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>
            </div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li><a href="/edit-hampers">Edit</a></li>
              <li><a>Delete</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CardRecipe: React.FC<CardRecipeProps> = ({ recipe }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img className="w-full h-50 object-cover" src={recipe.image} alt={recipe.title} />
      <div className="p-4">
        <h3 className="text-lg font-medium">{recipe.title}</h3>
        <p className="text-gray-600 mb-4">{recipe.description}</p>
        <hr />
        <div className="flex justify-end p-1">
          <div className="dropdown dropdown-top dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-sm m-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-ellipsis"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>
            </div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li><a href="/edit-recipe">Edit</a></li>
              <li><a>Delete</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
