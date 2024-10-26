import "./Carousel.css";
import { useState } from "react";

import nextArrow from "../../Assets/diablo-site-images copy/right-aarow.png";
import prevArrow from "../../Assets/diablo-site-images copy/icons8-left-30.png";

import image1 from "../../Assets/diablo-site-images copy/asphalt-cutting.png";

import image2 from "../../Assets/diablo-site-images copy/diablo-excavation-light.png";

import image3 from "../../Assets/diablo-site-images copy/asphalt-cutting.png";

const Carousel = () => {
  const images = [
    {
      id: 1,
      imageUrl: image1,
    },
    {
      id: 2,
      imageUrl: image2,
    },
    {
      id: 3,
      imageUrl: image3,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  return (
    <section className="carousel">
      <div className="carousel__container">
        <button onClick={prevSlide} className="carousel__btn ">
          <img src={prevArrow} className="prevArrow" alt="" />
        </button>
        <img
          src={images[activeIndex].imageUrl}
          alt={`Slide ${activeIndex + 1}`}
          className="carousel__img"
        />
        <button onClick={nextSlide} className="carousel__btn ">
          <img src={nextArrow} className="nextArrow" alt="" />
        </button>
      </div>
    </section>
  );
};
export default Carousel;
