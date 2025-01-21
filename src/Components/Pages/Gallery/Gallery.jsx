import { useState } from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";

import close from "../../../Assets/social/close.svg";

import "./Gallery.css";

import GalleryImages from "./GalleryPhotos";

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const showImage = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeImage = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="gallery">
      <ul className="gallery-images__list">
        {GalleryImages.map((image, id) => (
          <li
            key={id}
            className="gallery__item"
            onClick={() => showImage(image.image)}
          >
            <LazyLoadImage
              className="gallery__image"
              src={image.image}
              alt="Gallery image"
              effect="blur"
            />
          </li>
        ))}
      </ul>
      {isModalOpen && (
        <div className="image-popup">
          <div className="image-popup__container">
            <button className="close__button" onClick={closeImage}>
              <img src={close} alt="Close Button" />
            </button>
            <img
              className="popup__image"
              src={selectedImage}
              alt="Selected Image Modal"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
