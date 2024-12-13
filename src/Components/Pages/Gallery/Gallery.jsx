import { useState, useEffect } from "react";
import axios from "axios";
import "./Gallery.css";

export default function Gallery() {
  const [photos, setPhotos] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    // Fetch existing photos from the backend
    const fetchPhotos = async () => {
      try {
        const res = await axios.get("http://localhost:5000/files");
        const files = res.data;
        const photoUrls = files.map(
          (file) => `http://localhost:5000/image/${file.filename}`
        );
        setPhotos(photoUrls);
      } catch (err) {
        console.error(err);
      }
    };

    fetchPhotos();
  }, []);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);

      try {
        const res = await axios.post("http://localhost:5000/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        const newPhoto = `http://localhost:5000/image/${res.data.file.filename}`;
        setPhotos([...photos, newPhoto]);
        setSelectedFile(null);
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div className="gallery">
      <h1>Gallery</h1>
      <div className="upload-form">
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload Photo</button>
      </div>
      <div className="photo-grid">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Uploaded ${index}`}
            className="photo"
          />
        ))}
      </div>
    </div>
  );
}
