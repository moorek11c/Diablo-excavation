import "./Main.css";
import { usePopup } from "../Hooks/PopupHook";
import MainButtons from "./MainButtons/MainButtons";
import mainImg from "../../Assets/utilities/unsplash-digging.png";

function Main() {
  const { open: openQuotePopup } = usePopup("quote-form");

  return (
    <main className="main">
      <img className="main__image" src={mainImg} alt="Excevator digging" />
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
