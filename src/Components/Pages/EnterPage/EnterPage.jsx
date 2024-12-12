import companyLogo from "../../../Assets/social/enterPageLogo.png";
import "./EnterPage.css";

const EnterPage = ({ onEnter }) => {
  return (
    <div className="enter-page">
      <div className="enter-page__overlay"></div>
      <div className="enter-page__container">
        <img className="enter-page__img" src={companyLogo} alt="" />
        <button className="enter-page__button" onClick={onEnter}>
          Enter Site
        </button>
      </div>
    </div>
  );
};

export default EnterPage;
