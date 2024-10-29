import "./ContactPage.css";

function ContactPage() {
  return (
    <section className="contact-page">
      <h2 className="contact-page__title">Contact Us</h2>
      <div className="contact-page__info">
        <ul className="contact-page__list contact-page__list-days">
          <h3 className="contact-page__sub-title">Days</h3>

          <li className="contact-page__item">Monday</li>
          <li className="contact-page__item">Tuesday</li>
          <li className="contact-page__item">Wednesday</li>
          <li className="contact-page__item">Thursday</li>
          <li className="contact-page__item">Friday</li>
          <li className="contact-page__item">Saturday</li>
          <li className="contact-page__item">Sunday</li>
        </ul>
        <ul className="contact-page__list contact-page__list-hours">
          <h3 className="contact-page__sub-title">Hours</h3>

          <li className="contact-page__item">7:00 AM - 7:00pm</li>
          <li className="contact-page__item">7:00 AM - 7:00pm</li>
          <li className="contact-page__item">7:00 AM - 7:00pm</li>
          <li className="contact-page__item">7:00 AM - 7:00pm</li>
          <li className="contact-page__item">7:00 AM - 7:00pm</li>
          <li className="contact-page__item">7:00 AM - 7:00pm</li>
          <li className="contact-page__item">7:00 AM - 7:00pm</li>
        </ul>
      </div>
    </section>
  );
}

export default ContactPage;
