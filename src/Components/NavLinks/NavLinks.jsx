// import AboutPage from "../Pages/AboutPage/AboutPage";
import "./NavLinks.css";
import { NavLink } from "react-router-dom";

function NavLinks() {
  return (
    <nav className="nav-links">
      <ul className="nav-links__list">
        <li className="nav-link__item">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-link__item">
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
        </li>
        <li className="nav-link__item">
          <NavLink className="nav-link" to="/contact">
            Contact
          </NavLink>
        </li>
        <li className="nav-link">Gallery</li>
        <li className="nav-link">Reviews</li>
      </ul>
    </nav>
  );
}

export default NavLinks;
