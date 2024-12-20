import { useState } from "react";

import { Routes, Route } from "react-router-dom";
import { PopupProvider } from "../Contexts/PopupContext";
import Footer from "../Footer/Footer";

import "./App.css";
import ServicesPage from "../Pages/ServicesPage/Services";
import HomePage from "../Pages/HomePage/HomePage";
import ContactPage from "../Pages/ContactPage/ContactPage";
import QuotePopup from "../PopupWithForm/QuotePopup/QuotePopup";
import ReviewsPage from "../Pages/ReviewsPage/ReviewsPage";
import Gallery from "../Pages/Gallery/Gallery";
import ResponsiveHeader from "../Header/ResponsiveHeader/ResponsiveHeader";
import Login from "../PopupWithForm/Login/Login";
import Signup from "../PopupWithForm/Signup/Signup";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleRegester = (values) => {
    setCurrentUser(values);
    setIsLoggedIn(true);
    console.log("register", values);
  };

  return (
    <PopupProvider>
      <>
        <ResponsiveHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/Reviews" element={<ReviewsPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="*"
            element={
              <HomePage isLoggedIn={isLoggedIn} currentUser={currentUser} />
            }
          />
        </Routes>
        <Footer />
        <QuotePopup />
        <Login />
        <Signup onSubmit={handleRegester} />
      </>
    </PopupProvider>
  );
}

export default App;
