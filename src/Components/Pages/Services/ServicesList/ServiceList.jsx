import "./ServiceList.css";
import serviceData from "../../../../Utils/servicesData";
import ServiceCard from "../ServicesCard/ServiceCard";

function ServiceList({ onCardClick }) {
  return (
    <ul className="services__list-cards">
      {serviceData.map((service) => (
        <li className="service__item" key={service.id}>
          <ServiceCard serviceData={service} onCardClick={onCardClick} />
        </li>
      ))}
    </ul>
  );
}

export default ServiceList;
