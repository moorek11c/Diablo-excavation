import "./MainButtons.css";

function MainButtons({ openQuotePopup }) {
  return (
    <div>
      <ul className="main__buttons-list">
        <li className="main__button-item">
          <button
            onClick={openQuotePopup}
            type="button"
            className="main__button main__button-quote"
          >
            Get Quote
          </button>
        </li>
        <li className="main__button-item">
          <button className="main__button main__button-projects" type="button">
            Our Projects
          </button>
        </li>
      </ul>
    </div>
  );
}

export default MainButtons;
