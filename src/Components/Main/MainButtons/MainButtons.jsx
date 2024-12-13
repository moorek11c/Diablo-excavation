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
      </ul>
    </div>
  );
}

export default MainButtons;
