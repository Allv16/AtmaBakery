import { useState, useEffect } from "react";

export default function Indicator() {
  const [sizeText, setSizeText] = useState("");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      // Determine the size text based on the screen width
      if (width < 640) {
        setSizeText("xs");
      } else if (width < 768) {
        setSizeText("sm");
      } else if (width < 1024) {
        setSizeText("md");
      } else if (width < 1280) {
        setSizeText("lg");
      } else if (width < 1536) {
        setSizeText("xl");
      } else {
        setSizeText("2xl");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    !import.meta.env.PROD && (
      <div className="bottom-4 right-4 rounded-full bg-primary p-2 text-white fixed z-50">
        {sizeText.toUpperCase()}
      </div>
    )
  );
}
