import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import "./ImagePreviewSection.css";

import previewImgs from "./imgPreviewData";

function ImagePreviewSection() {
  return (
    <ul className="image-preview__list">
      {previewImgs.map((img) => (
        <li className="preview-item" key={img.id}>
          <LazyLoadImage
            src={img.src}
            alt={img.alt}
            effect="blur"
            className="preview-image"
          />
        </li>
      ))}
    </ul>
  );
}

export default ImagePreviewSection;
