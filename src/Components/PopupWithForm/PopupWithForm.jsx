import "./PopupWithForm.css";

import closeIcon from "../../Assets/diablo-site-images copy/icons8-close-window-50.png";

import { usePopup } from "../Hooks/PopupHook";

function PopupWithForm({ title, popupName, buttonText, children }) {
  const { isOpen, close } = usePopup(popupName);

  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <h2 className="popup__title">{title} </h2>
        <button onClick={close} className="popup__close" type="button">
          <img className="popup__close" src={closeIcon} alt="close" />
        </button>
        <form className="popup__form" action="">
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
