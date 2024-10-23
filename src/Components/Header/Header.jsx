import "./Header.css";
import NavLinks from "../NavLinks/NavLinks";
import mainLogo from "../../Assets/diablo-site-images copy/diablo-excavation-header-logo.png";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={mainLogo} alt="" />
      <NavLinks />
    </header>
  );
}

export default Header;
