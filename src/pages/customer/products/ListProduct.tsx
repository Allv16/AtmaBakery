import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { NavWrapper } from "../../../components/Wrapper";

export default function ListProduct() {
  return (
    <NavWrapper>
      <aside className="flex flex-row px-40">
        <div className="w-1/4 p-4 pt-3">
          <div className="card p-4">
            <label className="input input-bordered flex items-center gap-2 w-auto">
              <input type="text" className="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
          <div className="card">
            <div className="card-body">
              <h3 className="pb-2">Category Product</h3>
              <div className="pb-2">
                <div className="flex flex-wrap gap-2">
                  <button className="btn btn-primary">Cake</button>
                  <button className="btn btn-primary">Bread</button>
                  <button className="btn btn-primary">Drink</button>
                  <button className="btn btn-primary">Snack</button>
                  <button className="btn btn-primary">Hampers</button>
                </div>
              </div>
            </div>
          </div>
          <div className="card card-side">
            <figure className="ml-8 max-w-16">
              <img
                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                alt="Movie"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Kue Putu</h2>
              <p>Rp. 300.000</p>
            </div>
          </div>
        </div>
        <div className="w-3/4 p-4">
          <div className="grid grid-cols-3 gap-5">
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
