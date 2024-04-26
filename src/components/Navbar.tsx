import { ShoppingBasket, Menu } from "lucide-react";

export function Navbar() {
  return (
    <div className="navbar bg-white my-4 font-serif max-w-7xl mx-auto">
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
      <div className="navbar-center gap-5 xl:gap-10 xl:text-lg">
        <a className="font-bold text-black hidden lg:block">HOME</a>
        <a className="font-bold text-black hidden lg:block">ABOUT US</a>
        <h1 className="text-4xl lg:text-5xl font-bold text-primary ">
          ATMA KITCHEN
        </h1>
        <a className="font-bold text-black hidden lg:block">SHOP</a>
        <a className="font-bold text-black hidden lg:block">HOW TO ORDER</a>
      </div>
      <div className="navbar-end">
        <button className="btn btn-primary font-sans hidden lg:block">
          Login/SignUp
        </button>
        <button className="btn btn-sm btn-primary font-sans lg:hidden text-xs">
          Login/SignUp
        </button>
      </div>
    </div>
  );
}
