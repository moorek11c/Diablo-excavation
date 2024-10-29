import "./Footer.css";
import diabloLogo from "../../Assets/diablo-site-images copy/diablo-excavation-dark Background Removed.png";
import fbLogo from "../../Assets/diablo-site-images copy/facebook.png";
import linkedinLogo from "../../Assets/diablo-site-images copy/linkedin.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <img className="footer__img" src={diabloLogo} alt="" />
        <p className="footer__info">&copy; 2024 Diablo Excavation</p>
      </div>
      <ul className="footer-links__list">
        <li className="footer__links-item">
          <a
            href="https://facebook.com"
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
      </ul>
    </footer>
  );
}

export default Footer;
