import { Routes, Route } from "react-router-dom";
import { PopupProvider } from "../Contexts/PopupContext";
import Contact from "../Contact/Contact";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import "./App.css";
import Services from "../Pages/Services/Services";
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
        <Route path="/services" element={<Services />} />
        <Route path="/hours" element={<ContactPage />} />
      </Routes>
      <Footer />
      <QuotePopup />
    </PopupProvider>
  );
}

export default App;
