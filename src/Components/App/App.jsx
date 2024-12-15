import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { PopupProvider } from "../Contexts/PopupContext";
import Footer from "../Footer/Footer";

import "./App.css";
import Services from "../Pages/Services/Services";
import HomePage from "../Pages/HomePage/HomePage";
import ContactPage from "../Pages/ContactPage/ContactPage";
import QuotePopup from "../PopupWithForm/QuotePopup/QuotePopup";
import ReviewsPage from "../Pages/ReviewsPage/ReviewsPage";
import Gallery from "../Pages/Gallery/Gallery";
import EnterPage from "../Pages/EnterPage/EnterPage";
import ResponsiveHeader from "../Header/ResponsiveHeader/ResponsiveHeader";
import Login from "../PopupWithForm/login/login";

function App() {
  const [hasEntered, setHasEntered] = useState(() => {
    const savedHasEntered = localStorage.getItem("hasEntered");
    return savedHasEntered === "true" ? true : false;
  });

  const handleEnter = () => {
    setHasEntered(true);
    localStorage.setItem("hasEntered", "true");
  };

  useEffect(() => {
    // Save the hasEntered state to localStorage whenever it changes
    localStorage.setItem("hasEntered", hasEntered);
  }, [hasEntered]);

  return (
    <PopupProvider>
      {hasEntered ? (
        <>
          <ResponsiveHeader />
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
          <Login />
        </>
      ) : (
        <EnterPage onEnter={handleEnter} />
      )}
    </PopupProvider>
  );
}

export default App;
