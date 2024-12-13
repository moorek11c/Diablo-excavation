import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import DiabloLogo from "../../Assets/social/diablo-excavation-header-logo.png";
import mobileMenuIcon from "../../Assets/social/mobileMenuIcon.svg";
import "./hamburgerMenu.css";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBCollapse,
} from "mdb-react-ui-kit";

export default function HamburgerMenu() {
  const [openBasic, setOpenBasic] = useState(false);
  const navigate = useNavigate();

  return (
    <MDBNavbar expand="lg" className="mobile-menu">
      <MDBContainer fluid>
        <MDBNavbarBrand onClick={() => navigate("/")}>
          <img
            className="mobile-menu__img"
            src={DiabloLogo}
            alt="Diablo Excavation Logo"
          />
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setOpenBasic(!openBasic)}
        >
          <span className="menu__icon">
            <img className="menu__icon" src={mobileMenuIcon} alt="" />
          </span>
        </MDBNavbarToggler>

        <MDBCollapse navbar open={openBasic}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/services" className="nav-link">
              Services
            </NavLink>
            <NavLink to="/reviews" className="nav-link">
              Reviews
            </NavLink>
            <NavLink to="/gallery" className="nav-link">
              Gallery
            </NavLink>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
