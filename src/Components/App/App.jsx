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
import { AuthProvider } from "../Contexts/AuthContext";

function App() {
  return (
    <PopupProvider>
      <AuthProvider>
        <>
          <ResponsiveHeader />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/Reviews" element={<ReviewsPage />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
          <Footer />
          <QuotePopup />
          <Login />
        </>
      </AuthProvider>
    </PopupProvider>
  );
}

export default App;
