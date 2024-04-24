import React from "react";
import { NavWrapper } from "../../../components/Wrapper";
import { toast } from "sonner";

export default function About() {
  return (
    <NavWrapper>
      <div className="font-serif">About</div>
      {toast.error("This is an error toast")}
      <details className="dropdown">
        <summary className="m-1 btn">open or close</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </details>
    </NavWrapper>
  );
}
