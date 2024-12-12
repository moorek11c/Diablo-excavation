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
            to="/gallery"
          >
            Gallery
          </NavLink>
        </li>
        <li className="nav-link__item">
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link nav-link_active" : "nav-link"
            }
            to="/reviews"
          >
            Reviews
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
      </ul>
    </nav>
  );
}

export default NavLinks;
