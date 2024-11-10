import "./Header.css";
import NavLinks from "../NavLinks/NavLinks";
import mainLogo from "../../Assets/diablo-excavation-header-logo.png";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={mainLogo} alt="" />
      <div className="header__info">
        <h1 className="header__title">Diablo Excavation & Construction Inc.</h1>
        <p className="licence__number">CA LIC# 1110240</p>
        <p className="dir__number">Dir# 1001153835</p>
      </div>
      <NavLinks />
    </header>
  );
}

export default Header;
