import { useState } from "react";
import "./QuotePopup.css";
import { usePopup } from "../../Hooks/usePopup";
import PopupWithForm from "../PopupWithForm";

function QuotePopup() {
  const { close } = usePopup("quote-form");
  const [isLoading, setIsLoading] = useState(false);
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://formsubmit.co/info@diabloexcavation.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        console.log("Email sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          city: "",
          state: "",
          details: "",
        });
        setIsLoading(false);
        close();
      } else {
        console.error("Error sending email:", response.status);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <PopupWithForm
        action={handleSubmit}
        popupName="quote-form"
        title="Estimate"
        buttonText={isLoading ? "Sending..." : "Send"}
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
            required
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
            required
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
            required
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
            required
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
            required
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
            required
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
            required
          />
        </label>
      </PopupWithForm>
    </div>
  );
}

export default QuotePopup;
