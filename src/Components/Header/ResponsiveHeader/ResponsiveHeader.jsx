import { useState, useEffect } from "react";
import Header from "../Header";
import HamburgerMenu from "../../HamburgerMenu/HamburgerMenu";
import "./ResponsiveHeader.css";

const ResponsiveHeader = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <HamburgerMenu /> : <Header />;
};

export default ResponsiveHeader;
