import "./Main.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { usePopup } from "../Hooks/usePopup";
import MainButtons from "./MainButtons/MainButtons";
import mainImg from "../../Assets/utilities/unsplash-digging.png";

function Main() {
  const { open: openQuotePopup } = usePopup("quote-form");

  return (
    <main className="main">
      <LazyLoadImage
        className="main__image"
        alt="excavater-digging image"
        src={mainImg}
        effect="blur"
        height={600}
        width={"100%"}
      />
      <div className="main-overlay">
        <h2 className="main__mission-title">Our Mission </h2>
        <p className="main__mission-statement">
          At Diablo Excavation and Construction, we deliver expert emergency
          services, specializing in grading, underground utilities, and concrete
          work. With years of experience and a focus on timely, reliable
          results, we ensure every project is completed with professionalism and
          care.
        </p>
        <MainButtons openQuotePopup={openQuotePopup} />
      </div>
    </main>
  );
}

export default Main;
