import React, { useState } from "react";
import image3 from "../asset_images/image3.jpg";
import "bootstrap-icons/font/bootstrap-icons.css"; // bootstrap-icons must be installed

function Amenities() {
  // Amenity list with Bootstrap icons
  const amenities = [
    { name: "Bonfire", icon: "bi-fire" },
    { name: "Bath", icon: "bi-bucket" },
    { name: "Golf", icon: "bi-flag" },
    { name: "Tent Stay", icon: "bi-tree-fill" },
    { name: "CCTV", icon: "bi-camera-video" },
    { name: "Machan", icon: "bi-house" },
    { name: "Security", icon: "bi-shield-lock" },
    { name: "Pet Friendly", icon: "bi-heart" },
  ];

  // Repeat amenities for multiple slides
  const repeatedAmenities = [...amenities, ...amenities, ...amenities];

  // State for pagination
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerSlide = 9;

  // Next slide
  const handleNext = () => {
    setStartIndex((prev) =>
      prev + itemsPerSlide < repeatedAmenities.length ? prev + itemsPerSlide : 0
    );
  };

  // Previous slide
  const handlePrev = () => {
    setStartIndex((prev) =>
      prev - itemsPerSlide >= 0
        ? prev - itemsPerSlide
        : repeatedAmenities.length - itemsPerSlide
    );
  };

  return (
    <>
      <div className="amen-title">Amenities</div>
      <div className="amenity-wrap">
        {/* Left side image */}
        <div className="card" style={{ overflow: "hidden" }}>
          <img src={image3} alt="Master plan" />
        </div>

        {/* Right side grid with arrows */}
        <div className="amenity-grid-wrapper">
          {/* Left Arrow */}
          <button className="arrow-btn left" onClick={handlePrev}>
            <i className="bi bi-chevron-left"></i>
          </button>

          {/* Amenities Grid */}
          <div className="amenity-grid">
            {repeatedAmenities
              .slice(startIndex, startIndex + itemsPerSlide)
              .map((amenity, index) => (
                <div key={index} className="amenity">
                  <i className={`bi ${amenity.icon}`}></i>
                  <span>{amenity.name}</span>
                </div>
              ))}
          </div>

          {/* Right Arrow */}
          <button className="arrow-btn right" onClick={handleNext}>
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default Amenities;
