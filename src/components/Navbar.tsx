import React, { useState } from "react";
import { ShoppingBasket, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function Navbar() {
  const navigate = useNavigate();
  const { pathname } = location;

  return (
    <div className="navbar bg-white py-4 px-24 font-serif w-full mx-auto fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="navbar-start">
        <div className="dropdown lg:block hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <ShoppingBasket size={32} />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Homepage</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <Menu size={20} />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-sans"
          >
            <li>
              <a>Homepage</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center gap-5 xl:gap-10 xl:text-lg cursor-pointer">
        <a
          className={`font-bold text-black hidden lg:block ${!pathname.includes('about') && !pathname.includes('invoice') && !pathname.includes('how-to-order') ? 'border-b-2 border-primary' : ''}`}
          onClick={() => navigate('/')}
        >
          HOME
        </a>
        <a
          className={`font-bold text-black hidden lg:block ${pathname.includes('about') ? 'border-b-2 border-primary' : ''}`}
          onClick={() => navigate('/about')}
        >
          ABOUT US
        </a>
        <h1 className="text-4xl lg:text-5xl font-bold text-primary ">
          ATMA KITCHEN
        </h1>
        <a
          className={`font-bold text-black hidden lg:block ${pathname.includes('invoice') ? 'border-b-2 border-primary' : ''}`}
          onClick={() => navigate('/invoice-payment')}
        >
          SHOP
        </a>
        <a
          className={`font-bold text-black hidden lg:block ${pathname.includes('how-to-order') ? 'border-b-2 border-primary' : ''}`}
          onClick={() => navigate('/how-to-order')}
        >
          HOW TO ORDER
        </a>
      </div>
      <div className="navbar-end">
        <button
          className="btn btn-primary font-sans hidden lg:block"
          onClick={() => navigate("/login")}
        >
          Login/SignUp
        </button>
      </div>
    </div>
  );
}
