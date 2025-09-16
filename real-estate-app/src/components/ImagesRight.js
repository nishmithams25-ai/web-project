import React from "react";
import image1 from "../asset_images/image1.jpg";
import image2 from "../asset_images/image2.jpg";
export default function ImagesRight() {
  return (
    <div className="right-stack d-flex flex-column gap-3">
      <div className="photo">
        <img
          src={image1}
          alt="Barn (exact image)"
          className="img-fluid rounded"
        />
      </div>
      <div className="photo">
        <img
          src={image2}
          alt="Field (exact image)"
          className="img-fluid rounded"
        />
      </div>
    </div>
  );
}
