import "./QuotePopup.css";
import PopupWithForm from "../PopupWithForm";

function QuotePopup() {
  return (
    <div>
      <PopupWithForm
        popupName="quote-form"
        title="Estimate"
        buttonText="Submit"
      >
        <label htmlFor="first-name" className="popup__label">
          <p className="input-name">First Name</p>
          <input
            id="first-name"
            className="popup__input"
            placeholder="enter your first name"
            name="first-name"
            type="text"
          />
        </label>
        <label htmlFor="last-name" className="popup__label">
          <p className="input-name">Lirst Name</p>
          <input
            id="last-name"
            className="popup__input"
            placeholder="enter your last name"
            name="last-name"
            type="text"
          />
        </label>
        <label htmlFor="email" className="popup__label">
          <p className="input-name">Email</p>
          <input
            id="email"
            className="popup__input"
            placeholder="enter your first name"
            name="email"
            type="email"
          />
        </label>
        <label htmlFor="phone" className="popup__label">
          <p className="input-name">Phone</p>

          <input
            id="phone"
            className="popup__input"
            placeholder="enter your phone number"
            name="phone-number"
            type="tel"
          />
        </label>
        <label htmlFor="city" className="popup__label">
          <p className="input-name">City</p>
          <input
            id="city"
            className="popup__input"
            placeholder="enter your city"
            name="city"
            type="text"
          />
        </label>
        <label htmlFor="state" className="popup__label">
          <p className="input-name">State</p>
          <input
            id="state"
            className="popup__input"
            placeholder="enter your state"
            name="state"
            type="text"
          />
        </label>
        <label htmlFor="details" className="popup__label">
          <p className="input-name">Details</p>
          <textarea
            id="details"
            className="popup__text-area"
            placeholder="please describe your job"
            name="details"
            type="text"
          />
        </label>
      </PopupWithForm>
    </div>
  );
}

export default QuotePopup;
