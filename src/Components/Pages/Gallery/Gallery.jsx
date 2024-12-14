import { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import axios from "axios";
import "./Gallery.css";

function Gallery() {
  const [file, setFile] = useState(null);
  const [imageId, setImageId] = useState(null);
  const [uploadedFileURL, setUploadedFileURL] = useState(null);
  const [error, setError] = useState(null);
  const [images, setImages] = useState([]);

  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const url = "http://localhost:3001/images/upload";
    const formData = new FormData();
    formData.append("image", file);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    axios
      .post(url, formData, config)
      .then((response) => {
        console.log("Upload response:", response.data);
        setImageId(response.data.imageId);
        setError(null); // Clear any previous errors
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
        setError("Error uploading file. Please try again.");
      });
  }

  useEffect(() => {
    if (imageId) {
      const fetchImage = async () => {
        try {
          const response = await axios.get(
            `http://localhost:3001/images/${imageId}`,
            {
              responseType: "blob",
            }
          );
          const imageURL = URL.createObjectURL(response.data);
          setUploadedFileURL(imageURL);
        } catch (error) {
          console.error("Error fetching image:", error);
          setError("Error fetching image. Please try again.");
        }
      };

      fetchImage();
    }
  }, [imageId]);

  useEffect(() => {
    const fetchAllImages = async () => {
      try {
        const response = await axios.get("http://localhost:3001/images");
        setImages(response.data);
      } catch (error) {
        console.error("Error fetching images:", error);
        setError("Error fetching images. Please try again.");
      }
    };

    fetchAllImages();
  }, []);

  return (
    <div className="gallery">
      <h1 className="gallery__title">Gallery</h1>
      <form className="gallery-upload__form" onSubmit={handleSubmit}>
        <input
          className="gallery-file__input"
          type="file"
          onChange={handleChange}
        />
        <button className="gallery-img__sbmt-button" type="submit">
          Upload
        </button>
      </form>
      {error && <p className="error">{error}</p>}
      {uploadedFileURL && (
        <LazyLoadImage
          effect="blur"
          className="preview-image"
          src={uploadedFileURL}
          alt="Uploaded content"
        />
      )}
      <div className="gallery-images">
        {images.map((image) => (
          <LazyLoadImage
            effect="blur"
            key={image.id}
            src={`http://localhost:3001/images/${image._id}`}
            alt="Gallery content"
            className="gallery-image"
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
