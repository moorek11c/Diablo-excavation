import "./About.css";
// import diabloLogo from "../../Assets/diablo-excavation-dark Background Removed.png";

function About() {
  return (
    <section className="about">
      <div className="about__content">
        <h2 className="about__title">About Us</h2>
        <p className="about__description">
          Diablo Excavation & Construction Inc. is a leading general engineering
          contractor that services Northern California and East Bay-area. With
          20 plus years of experience we are your go to company for earthwork
          service, underground utilities, engineered septic systems, grading
          work, footings and much more. Give us a call today and let us know
          what you&apos;re working on.
        </p>
      </div>
      {/* <img
        className="about__image"
        src={diabloLogo}
        alt="Discovery Bay city logo"
      /> */}
    </section>
  );
}

export default About;
