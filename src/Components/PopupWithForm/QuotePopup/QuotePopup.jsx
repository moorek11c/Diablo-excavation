import { useState } from "react";
import "./QuotePopup.css";
import PopupWithForm from "../PopupWithForm";
import { submitForm } from "../../../Utils/api";

function QuotePopup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    city: "",
    state: "",
    details: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await submitForm(formData);
      close();
      console.log("Form submitted successfully:", response);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div>
      <PopupWithForm
        popupName="quote-form"
        title="Estimate"
        buttonText="Submit"
        onSubmit={handleSubmit}
      >
        <label htmlFor="first-name" className="popup__label">
          <p className="input-name">First Name</p>
          <input
            id="first-name"
            className="popup__input"
            placeholder="enter your first name"
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="last-name" className="popup__label">
          <p className="input-name">Last Name</p>
          <input
            id="last-name"
            className="popup__input"
            placeholder="enter your last name"
            name="lastName"
            type="text"
            onChange={handleChange}
            value={formData.lastName}
          />
        </label>
        <label htmlFor="email" className="popup__label">
          <p className="input-name">Email</p>
          <input
            id="email"
            className="popup__input"
            placeholder="enter your email"
            name="email"
            type="email"
            onChange={handleChange}
            value={formData.email}
          />
        </label>
        <label htmlFor="phone" className="popup__label">
          <p className="input-name">Phone</p>
          <input
            id="phone"
            className="popup__input"
            placeholder="enter your phone number"
            name="phoneNumber"
            type="tel"
            onChange={handleChange}
            value={formData.phoneNumber}
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
            onChange={handleChange}
            value={formData.city}
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
            onChange={handleChange}
            value={formData.state}
          />
        </label>
        <label htmlFor="details" className="popup__label">
          <p className="input-name">Details</p>
          <textarea
            id="details"
            className="popup__text-area"
            placeholder="please describe your job"
            name="details"
            onChange={handleChange}
            value={formData.details}
          />
        </label>
      </PopupWithForm>
    </div>
  );
}

export default QuotePopup;
