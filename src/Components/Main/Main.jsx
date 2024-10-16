import "./Main.css";
import mainImg from "../../Assets/diablo-site-images copy/main-img.png";
import mainLogo from "../../Assets/diablo-site-images copy/diablo-excavation-header-logo.png";

function Main() {
  return (
    <main className="main">
      <img className="main-image" src={mainImg} alt="" />
      <img className="main-image__logo" src={mainLogo} alt="" />
      <div className="main__about">
        <p className="main__about-content">
          Diablo Excavation & Construction inc is a leading general engineering
          contractor that services Northern California and East Bay-area with 20
          plus years of experience in the business we are your go to company for
          Earthwork service, underground utilities, engineered septic systems,
          grading work, footings and much more give us a call today and let us
          know what your working on
        </p>
      </div>
    </main>
  );
}

export default Main;
