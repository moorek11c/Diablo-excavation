import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { PopupProvider } from "../Contexts/PopupContext";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import "./App.css";
import Services from "../Pages/Services/Services";
import HomePage from "../Pages/HomePage/HomePage";
import ContactPage from "../Pages/ContactPage/ContactPage";
import QuotePopup from "../PopupWithForm/QuotePopup/QuotePopup";
import ReviewsPage from "../Pages/ReviewsPage/ReviewsPage";
import Gallery from "../Pages/Gallery/Gallery";
import EnterPage from "../Pages/EnterPage/EnterPage";

function App() {
  const [hasEntered, setHasEntered] = useState(false);

  const handleEnter = () => {
    setHasEntered(true);
  };
  return (
    <PopupProvider>
      {hasEntered ? (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/Reviews" element={<ReviewsPage />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
          <Footer />
          <QuotePopup />
        </>
      ) : (
        <EnterPage onEnter={handleEnter} />
      )}
    </PopupProvider>
  );
}

export default App;
