import { NavWrapper } from "../../../components/Wrapper";
import React from "react";

export default function DetailProduct() {
  return (
    <NavWrapper>
      <aside className="mt-20">
        <div className="flex flex-row px-40">
          <div className="w-1/2 p-4 pt-5">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Product Image"
              className="max-w-full h-full"
            />
          </div>
          <div className="w-1/2 p-4 pt-5 ml-10">
            <h1 className="text-4xl font-serif font-bold mb-4">
              Kue Lapis Legit
            </h1>
            <p className="text-xl text-secondary-dark font-bold mb-4">
              Rp 200.000
            </p>
            <p className="text-base mb-6">
              Deskripsi produk ini memberikan informasi mendetail tentang fitur,
              manfaat, dan spesifikasi produk yang ditawarkan. Ini membantu
              pelanggan memahami apa yang mereka beli dan mengapa produk ini
              bernilai.
            </p>
            <form action="">
              <input
                type="date"
                className="input input-bordered w-full max-w-xs mb-4"
              />
              <div className="flex flex-row items-center mb-4">
                <input
                  type="number"
                  placeholder="Input the purchase amount"
                  className="input input-bordered w-full max-w-xs"
                />
                <p className="text-center ms-5">Stok : 5</p>
              </div>
              <div className="flex items-center mb-4">
                <div className="form-control mr-4">
                  <label className="label cursor-pointer">
                    <input
                      type="radio"
                      name="radio-10"
                      className="radio checked:bg-primary mr-2"
                      defaultChecked
                    />
                    <span className="label-text">Pre-Order</span>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <input
                      type="radio"
                      name="radio-10"
                      className="radio checked:bg-primary mr-2"
                      defaultChecked
                    />
                    <span className="label-text">Ready Stock</span>
                  </label>
                </div>
              </div>
              <div className="flex space-x-4 mt-16">
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg hover:bg-primary hover:text-white">
                  Add to Chart
                </button>
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-primary text-white hover:bg-primary hover:text-white">
                  Buy Now
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex justify-center my-20 mx-44">
          <hr className="w-full border-t-1 border-black" />
        </div>
        <div className="w-full px-44 my-20">
            <h1 className="text-4xl font-serif font-bold mb-10 text-center">Related Product</h1>
            <div className="grid grid-cols-4 gap-6">
            <div className="card bg-base-100">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body text-center bg-white">
                <h2 className="card-title justify-center">Lapis Legit</h2>
                <p>Rp 20.000</p>
              </div>
            </div>
            <div className="card bg-base-100">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body text-center bg-white">
                <h2 className="card-title justify-center">Lapis Legit</h2>
                <p>Rp 20.000</p>
              </div>
            </div>
            <div className="card bg-base-100">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body text-center bg-white">
                <h2 className="card-title justify-center">Lapis Legit</h2>
                <p>Rp 20.000</p>
              </div>
            </div>
            <div className="card bg-base-100">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body text-center bg-white">
                <h2 className="card-title justify-center">Lapis Legit</h2>
                <p>Rp 20.000</p>
              </div>
            </div>
            </div>
        </div>
      </aside>
    </NavWrapper>
  );
}
