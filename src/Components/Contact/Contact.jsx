import "./Contact.css";
import phoneIcon from "../../Assets/icons8-phone-50.png";
import emailIcon from "../../Assets/icons8-email-50.png";
import hoursIcon from "../../Assets/icons8-clock-50.png";
import emergencyIcon from "../../Assets/icons8-emergency-50.png";

function Contact() {
  return (
    <section className="contact">
      <ul className="contact__list">
        <li className="contact__link">
          <img src={hoursIcon} alt="Clock" className="contact__icon" />
          <p className="contact__info">Hours: Monday - Friday 0700 - 1700</p>
        </li>
        <li className="contact__link">
          <img src={emailIcon} alt="Envelope" className="contact__icon" />
          <p className="contact__info">info@Diabloexcavation.com</p>
        </li>
        <li className="contact__link">
          <img src={phoneIcon} alt="Phone" className="contact__icon" />
          <p className="contact__info">(925)628-8877</p>
        </li>
        <li className="contact__link">
          <img src={emergencyIcon} alt="Siren" className="contact__icon" />
          <p className="contact__info">24/7 emergency service</p>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
