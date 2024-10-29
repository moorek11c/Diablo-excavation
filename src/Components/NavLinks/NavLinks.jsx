import "./NavLinks.css";
import { NavLink } from "react-router-dom";

function NavLinks() {
  return (
    <nav className="nav-links">
      <ul className="nav-links__list">
        <li className="nav-link__item">
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link nav-link_active" : "nav-link"
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="nav-link__item">
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link nav-link_active" : "nav-link"
            }
            to="/services"
          >
            Services
          </NavLink>
        </li>
        <li className="nav-link__item">
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link nav-link_active" : "nav-link"
            }
            to="/contact"
          >
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
