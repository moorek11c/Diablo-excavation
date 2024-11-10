import { useState } from "react";

import "./Services.css";
import ServiceList from "./ServicesList/ServiceList";

function Services() {
  const [selectedDescription, setSelectedDescription] = useState("");
  const [showDescription, setShowDescription] = useState(false);

  const handleCardClick = (description) => {
    setShowDescription(false); // Hide the description to reset the animation
    setTimeout(() => {
      setSelectedDescription(description);
      setShowDescription(true); // Show the description again to trigger the animation
    }, 10); // Small delay to ensure the reset takes effect
  };

  return (
    <section className="services">
      <h2 className="services__main-title">Services</h2>
      <ServiceList onCardClick={handleCardClick} />
      <div className="services__content">
        <p
          className={`services__description ${
            showDescription ? "services__description_opened" : ""
          }`}
        >
          {selectedDescription}
        </p>
      </div>
    </section>
  );
}
export default Services;
