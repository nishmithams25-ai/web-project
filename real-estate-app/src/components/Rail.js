// src/components/Rail.js
import React from "react";
import logo from "../asset_images/logo.jpg";
import home from "../asset_images/home.jpg";
import grid from "../asset_images/grid.jpg";
import location from "../asset_images/location.jpg";
import book from "../asset_images/book.jpg";
import person from "../asset_images/person.jpg";

export default function Rail() {
  return (
    <div className="rail">
      {/* Top Project Logo */}
      <div className="tile-logo">
        <img
          src={logo}
          alt="Project Logo"
          style={{ width: "28px", height: "28px" }}
        />
      </div>

      <div className="divider"></div>

      {/* Active Home */}
      <div className="ico active" title="Home">
        <img
          src={home}
          alt="Home"
          style={{ width: "20px", height: "20px" }}
        />
      </div>

      {/* Location */}
      <div className="ico" title="Location">
        <img
          src={location}
          alt="Location"
          style={{ width: "20px", height: "20px" }}
        />
      </div>

      {/* Grid */}
      <div className="ico" title="Grid">
        <img
          src={grid}
          alt="Grid"
          style={{ width: "20px", height: "20px" }}
        />
      </div>

      {/* Book */}
      <div className="ico" title="Book">
        <img
          src={book}
          alt="Book"
          style={{ width: "20px", height: "20px" }}
        />
      </div>

      {/* Profile */}
      <div className="ico" title="Profile">
        <img
          src={person}
          alt="Profile"
          style={{ width: "20px", height: "20px" }}
        />
      </div>
    </div>
  );
}
