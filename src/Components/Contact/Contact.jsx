import "./Contact.css";
import phoneIcon from "../../Assets/social/phoneIcon.png";
import emailIcon from "../../Assets/social/icons8-email-50.png";
import emergencyIcon from "../../Assets/social/emergencyIcon.png";

function Contact() {
  return (
    <section className="contact">
      <ul className="contact__list">
        <li className="contact__item">
          <img src={emailIcon} alt="Envelope" className="contact__icon" />
          <p className="contact__info">
            <a className="contact-link" href="mailto:info@Diabloexcavation.com">
              info@Diabloexcavation.com
            </a>
          </p>
        </li>
        <li className="contact__item">
          <img src={phoneIcon} alt="Phone" className="contact__icon" />
          <p className="contact__info">
            <a className="contact-link" href="tel:+19256288877">
              (925) 628-8877
            </a>
          </p>
        </li>
        <li className="contact__item">
          <img src={emergencyIcon} alt="Siren" className="contact__icon" />
          <p className="contact__info">24/7 emergency service</p>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
