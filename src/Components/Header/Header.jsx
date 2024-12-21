import { useState } from "react";

import "./Header.css";
import { NavLink } from "react-router-dom";
import NavLinks from "../NavLinks/NavLinks";
import mainLogo from "../../Assets/social/diablo-excavation-header-logo.png";

function Header() {
  const [number, setNumber] = useState("EMERGENCY");

  const handleEmergencyClick = () => {
    setNumber("+1(925)628-8877");
    setTimeout(() => {
      setNumber("EMERGENCY");
    }, 5000);
  };

  return (
    <header className="header">
      <NavLink to="/">
        <img
          className="header__logo"
          src={mainLogo}
          alt="diablo-construction logo"
        />
      </NavLink>
      <NavLinks />
      <button
        onClick={handleEmergencyClick}
        type="button"
        className="emergency-button"
      >
        {number}
      </button>
    </header>
  );
}

export default Header;
