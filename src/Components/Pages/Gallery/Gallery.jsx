import React, { useState, useEffect } from "react";

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("/api/images")
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {images.map((image, index) => (
        <img key={index} src={image.image} alt={image.name} />
      ))}
    </div>
  );
};

export default Gallery;
