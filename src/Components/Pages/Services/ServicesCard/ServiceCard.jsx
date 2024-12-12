import "./ServiceCard.css";

function ServiceCard({ serviceData, onCardClick }) {
  const handleClick = () => {
    onCardClick(serviceData.description, serviceData.photos);
  };

  return (
    <div onClick={handleClick} className="service__card">
      <img className="service__img" src={serviceData.image} alt="Excavator" />
      <div className="service__info">
        <h2 className="service__title">{serviceData.title}</h2>
      </div>
    </div>
  );
}

export default ServiceCard;
