import "./Footer.css";
import fbLogo from "../../Assets/social/newFBlogo.svg";
import linkedinLogo from "../../Assets/social/newLinkedinlogo.svg";
import instaLogo from "../../Assets/social/newIGlogo.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__info-container">
        <p className="footer__info">&copy; 2024 Diablo Excavation</p>
        <p className="footer__info">CA LIC# 1110240</p>
        <p className="footer__info">Dir# 1001153835</p>
      </div>

      <ul className="footer-links__list">
        <li className="footer__links-item">
          <a
            href="https://www.facebook.com/p/Diablo-excavation-construction-inc-100091784948902/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link footer__link--social"
          >
            <img
              className="footer__img footer__img-fb"
              src={fbLogo}
              alt="Facebook"
            />
          </a>
        </li>
        <li className="footer__links-item">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link footer__link--social"
          >
            <img
              className="footer__img footer__img-linkedin"
              src={linkedinLogo}
              alt="Facebook"
            />
          </a>
        </li>
        <li className="footer__links-item">
          <a
            href="https://www.instagram.com/diablo_excavation/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link footer__link--social"
          >
            <img
              className="footer__img footer__img-instagram"
              src={instaLogo}
              alt="instagram"
            />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
