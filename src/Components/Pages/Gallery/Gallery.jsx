import { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {
  uploadImage,
  fetchImageById,
  fetchAllImages,
  deleteImageById,
} from "../../../Utils/api";
import { useAuth } from "../../Contexts/AuthContext";
import "./Gallery.css";

function Gallery() {
  const { token } = useAuth();
  // State to store the file to be uploaded
  const [file, setFile] = useState(null);

  // State to store the image ID of the uploaded file
  const [imageId, setImageId] = useState(null);

  // State to store the URL of the uploaded file
  const [uploadedFileURL, setUploadedFileURL] = useState(null);

  // State to store any errors that occur during the upload process
  const [error, setError] = useState(null);

  // State to store all images in the gallery
  const [images, setImages] = useState([]);

  // State to store loading status
  const [loading, setLoading] = useState(false);

  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  // Function to handle the form submission and upload the file to the backend
  async function handleSubmit(event) {
    event.preventDefault();
    if (!token) {
      setError("You must be logged in to upload images.");
      return;
    }
    setLoading(true);
    try {
      const data = await uploadImage(file);
      console.log("Upload response:", data);

      setImageId(data.imageId);
      setFile(null);
      setError(null);
    } catch (error) {
      setError("Error uploading file. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(imageId) {
    try {
      await deleteImageById(imageId);
      setImages(images.filter((image) => image._id !== imageId));
    } catch (error) {
      setError("Error deleting image. Please try again.");
    }
  }

  useEffect(() => {
    if (imageId) {
      const fetchImage = async () => {
        try {
          const imageURL = await fetchImageById(imageId);
          setUploadedFileURL(imageURL);
        } catch (error) {
          setError("Error fetching image. Please try again.");
        }
      };

      fetchImage();
    }
  }, [imageId]);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      try {
        const data = await fetchAllImages();
        setImages(data);
      } catch (error) {
        setError("Error fetching images. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="gallery">
      <h1 className="gallery__title">Gallery</h1>
      {token && (
        <form className="gallery-upload__form" onSubmit={handleSubmit}>
          <input
            className="gallery-file__input"
            type="file"
            onChange={handleChange}
          />
          <button
            className="gallery-img__sbmt-button"
            type="submit"
            disabled={loading}
          >
            {loading ? "Uploading..." : "Upload"}
          </button>
        </form>
      )}
      {error && <p className="error">{error}</p>}
      <div className="gallery-images">
        {uploadedFileURL && (
          <LazyLoadImage
            effect="blur"
            className="gallery-image"
            src={uploadedFileURL}
            alt="Uploaded content"
          />
        )}
        {images.map((image) => (
          <div key={image._id} className="gallery-image-container">
            <LazyLoadImage
              effect="blur"
              src={`http://localhost:3001/images/${image._id}`}
              alt="Gallery content image"
              className="gallery-image"
            />
            {token && (
              <button
                className="delete-button"
                onClick={() => handleDelete(image._id)}
              >
                X
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
