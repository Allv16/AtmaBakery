import React from "react";
import { NavWrapper } from "../../../components/Wrapper";
import { toast } from "sonner";

export default function About() {
  return (
    <NavWrapper>
      <div>About</div>
      {toast.error("This is an error toast")}
      <button className="btn btn-primary">alvian</button>
    </NavWrapper>
  );
}
