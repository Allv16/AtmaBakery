import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import Indicator from "./Indicator";

export const NavWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="max-w-7xl mx-auto font-mulish">
        <Navbar />
        {children}
      </div>
      <Footer />
      <Indicator />
    </>
  );
};
