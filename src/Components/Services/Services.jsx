import "./Services.css";

function Services() {
  return (
    <section className="services">
      <h2 className="services__title">Services</h2>
      <ul className="services__list">
        <li className="services__item">
          <h3 className="services__sub-title">Grading</h3>
        </li>
        <li className="services__item">
          <h3 className="services__sub-title">Sewer</h3>
          <p className="services__description"></p>
        </li>
        <li className="services__item">
          <h3 className="services__sub-title">Concrete</h3>
          <p className="services__description"></p>
        </li>
        <li className="services__item">
          <h3 className="services__sub-title">Excavation</h3>
          <p className="services__description"></p>
        </li>
      </ul>
      <article className="services__article"></article>
    </section>
  );
}

export default Services;

{
  /* <p className="services__description">
            We offer professional construction grading services to ensure your
            project starts with a solid foundation. Our team uses advanced
            equipment to level and shape the land, optimizing site drainage and
            preparing the area for building or landscaping. Whether you need
            grading for residential, commercial, or industrial projects, we
            ensure precision and compliance with all engineering and design
            standards. Our services are designed to prevent water pooling, soil
            erosion, and structural issues, giving your project the reliable
            groundwork it needs to succeed.
          </p> */
}
