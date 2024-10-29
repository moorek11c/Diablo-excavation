import { useState } from "react";

import "./Services.css";
import ServiceList from "./ServicesList/ServiceList";

function Services() {
  const [selectedDescription, setSelectedDescription] = useState("");

  const handleCardClick = (description) => {
    setSelectedDescription(description);
  };

  return (
    <section className="services">
      <h2 className="services__main-title">Service</h2>
      <ServiceList onCardClick={handleCardClick} />
      <div className="services__content">
        <p
          className={selectedDescription ? "services__description_opened" : ""}
        >
          {selectedDescription}
        </p>
      </div>
    </section>
  );
}
export default Services;
