import { Routes, Route } from "react-router-dom";

import Contact from "../Contact/Contact";
import Header from "../Header/Header";

import "./App.css";
import AboutPage from "../Pages/AboutPage/AboutPage";
import HomePage from "../Pages/HomePage/HomePage";

function App() {
  return (
    <>
      <Header />
      <Contact />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
