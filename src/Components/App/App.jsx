import { Routes, Route } from "react-router-dom";
import { PopupProvider } from "../Contexts/PopupContext";
import Contact from "../Contact/Contact";
import Header from "../Header/Header";

import "./App.css";
import AboutPage from "../Pages/AboutPage/AboutPage";
import HomePage from "../Pages/HomePage/HomePage";
import ContactPage from "../Pages/ContactPage/ContactPage";
import QuotePopup from "../PopupWithForm/QuotePopup/QuotePopup";

function App() {
  return (
    <PopupProvider>
      <Header />
      <Contact />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <QuotePopup />
    </PopupProvider>
  );
}

export default App;
