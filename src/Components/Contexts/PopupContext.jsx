import { useContext, createContext, useState } from "react";

const popupContext = createContext();

export const PopupProvider = ({ children }) => {
  const [activePopup, setActivePopup] = useState(null);

  const openPopup = (popupName) => {
    console.log(popupName);
    setActivePopup(popupName);
  };
  const closePopup = () => {
    setActivePopup(null);
  };

  return (
    <popupContext.Provider value={{ activePopup, openPopup, closePopup }}>
      {children}
    </popupContext.Provider>
  );
};

export const UsePopupContext = () => useContext(popupContext);
