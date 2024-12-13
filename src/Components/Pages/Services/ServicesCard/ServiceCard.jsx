import { LazyLoadImage } from "react-lazy-load-image-component";

import "./ServiceCard.css";

function ServiceCard({ serviceData, onCardClick }) {
  const handleClick = () => {
    onCardClick(serviceData.description, serviceData.photos);
  };

  return (
    <div onClick={handleClick} className="service__card">
      <LazyLoadImage
        className="service__img"
        src={serviceData.image}
        alt="Excavator"
        effect="blur" // You can use other effects like "opacity" or "black-and-white"
      />
      <div className="service__info">
        <h2 className="service__title">{serviceData.title}</h2>
      </div>
    </div>
  );
}

export default ServiceCard;
