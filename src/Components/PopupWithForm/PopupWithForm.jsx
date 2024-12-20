import "./PopupWithForm.css";
import closeIcon from "../../Assets/social/icons8-close-window-50.png";
import { usePopup } from "../Hooks/usePopup";

function PopupWithForm({ title, popupName, buttonText, children, onSubmit }) {
  const { isOpen, close } = usePopup(popupName);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className={`popup__container popup__container--${popupName}`}>
        <h2 className="popup__title">{title} </h2>
        <button onClick={close} className="popup__close" type="button">
          <img className="popup__close" src={closeIcon} alt="close" />
        </button>
        <form className="popup__form" onSubmit={onSubmit}>
          {children}
          <button className="popup__submit-btn" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
