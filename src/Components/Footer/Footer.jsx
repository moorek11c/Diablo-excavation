import "./Footer.css";
import fbLogo from "../../Assets/social/facebook.png";
import linkedinLogo from "../../Assets/social/linkedin.png";
import instaLogo from "../../Assets/social/instagramIcon.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__info">&copy; 2024 Diablo Excavation</p>
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
