import { useState } from "react";

import "./Services.css";
import ServiceList from "./ServicesList/ServiceList";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Services() {
  const [selectedDescription, setSelectedDescription] = useState("");
  const [showDescription, setShowDescription] = useState(false);
  const [selectedPhotos, setSelectedPhotos] = useState([]);
  const [showPhotos, setShowPhotos] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCardClick = (description, photos) => {
    setShowDescription(false); // Hide the description to reset the animation
    setShowPhotos(false);
    setLoading(true); // Set loading to true
    setSelectedPhotos([]); // Clear previous photos

    // Preload images
    const preloadImages = photos.map((photo) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = photo;
        img.onload = resolve;
      });
    });

    Promise.all(preloadImages).then(() => {
      setSelectedDescription(description);
      setSelectedPhotos(photos || []); // Ensure photos is an array
      setShowDescription(true);
      setShowPhotos(true); // Show the description again to trigger the animation
      setLoading(false); // Set loading to false once images are preloaded
    });
  };

  return (
    <section className="services">
      <h2 className="services__main-title">Services</h2>
      <p className="services__tip">Click one of the cards for more info</p>
      <section className="all-services">
        <ServiceList onCardClick={handleCardClick} />

        <div className="services__content">
          <p
            className={`services__description ${
              showDescription ? "services__description_opened" : ""
            }`}
          >
            {selectedDescription}
          </p>
          <div
            className={`services__photos ${
              showPhotos ? "services__photos_opened" : ""
            }`}
          >
            {loading && <div className="spinner"></div>}
            {selectedPhotos.length > 0 &&
              selectedPhotos.map((photo, id) => (
                <LazyLoadImage
                  className="service-photo"
                  key={id}
                  src={photo}
                  alt={`Service ${id + 1}`}
                />
              ))}
          </div>
        </div>
      </section>
    </section>
  );
}

export default Services;
