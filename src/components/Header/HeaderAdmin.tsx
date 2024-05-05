import { Link } from "react-router-dom";
import DropdownNotification from "./DropdownNotification";
import { Menu } from "lucide-react";
import { DropdownAdmin } from "./DropdownUser";
import { useState } from "react";

const HeaderAdmin = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  const [search, setSearch] = useState("");

  return (
    <header className="sticky top-0 z-999 flex w-full bg-secondary-white drop-shadow-1">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
            className="z-99999 block rounded-sm border border-stroke text-black p-2 shadow-sm lg:hidden"
          >
            <Menu size={24} />
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}

          <Link className="block flex-shrink-0 lg:hidden" to="/">
            {/* <img src={Logo} alt="Logo" /> */}
          </Link>
        </div>

        <div className="w-fit">
          <form action="https://formbold.com/s/unique_form_id" method="POST">
            <div className="relative">
              <button className="absolute left-0 top-1/2 -translate-y-1/2"></button>
            </div>
          </form>
        </div>

        <div className="flex items-center gap-5 gap-7">
          <ul className="flex items-center gap-2 gap-4">
            <DropdownNotification />
            <DropdownAdmin />
          </ul>
        </div>
      </div>
    </header>
  );
};

export default HeaderAdmin;
