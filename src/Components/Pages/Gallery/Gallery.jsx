import { useState, useEffect } from "react";
import "./Gallery.css";

function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("http://localhost:3001/images/all");
        if (response.ok) {
          const data = await response.json();
          setImages(data);
        } else {
          console.log("Failed to fetch images", response);
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      try {
        const response = await fetch("http://localhost:3001/images/upload", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Image uploaded:", data);
          setImage(data.imageId); // Save the image ID for later retrieval
          // Fetch the updated list of images
          const updatedImages = await fetch("http://localhost:3001/images/all");
          const updatedData = await updatedImages.json();
          setImages(updatedData);
        } else {
          console.log("File upload failed", response);
        }
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };

  return (
    <div className="gallery">
      <h1>Upload an Image</h1>
      <input type="file" onChange={handleFileChange} />
      <h2>All Images:</h2>
      <div className="gallery-images">
        {images.map((img) => (
          <div key={img._id}>
            <img
              src={`http://localhost:3001/images/${img._id}`}
              alt={img.image_name}
              className="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
