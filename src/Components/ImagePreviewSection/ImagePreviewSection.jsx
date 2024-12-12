import "./ImagePreviewSection.css";

import previewImgs from "./imgPreviewData";

function ImagePreviewSection() {
  return (
    <ul className="image-preview__list">
      {previewImgs.map((img) => (
        <li className="preview-item" key={img.id}>
          <img src={img.src} alt={img.alt} className="preview-image" />
        </li>
      ))}
    </ul>
  );
}

export default ImagePreviewSection;

// maps all

{
  /* <ul className="services__list-cards">
{serviceData.map((service) => (
  <li className="service__item" key={service.id}>
    <ServiceCard serviceData={service} onCardClick={onCardClick} />
  </li>
))}
</ul> */
}

{
  /* <div onClick={handleClick} className="service__card">
<img className="service__img" src={serviceData.image} alt="Excavator" />
<div className="service__info">
  <h2 className="service__title">{serviceData.title}</h2>
</div>
</div> */
}
