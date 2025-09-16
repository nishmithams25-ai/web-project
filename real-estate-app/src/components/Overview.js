import React from "react";

function Overview() {
  return (
    <section className="mb-4">
      <h3>Overview</h3>
      <div className="overview-section">
        
        {/* Total Units */}
        <div className="overview-card">
          <i className="bi bi-building"></i>
          <div>Total units</div>
          <strong>3340</strong>
        </div>

        {/* Available Units */}
        <div className="overview-card">
          <i className="bi bi-box"></i>
          <div>Available units</div>
          <strong>-</strong>
        </div>

        {/* Price */}
        <div className="overview-card">
          <i className="bi bi-cash-stack"></i>
          <div>Price starts at</div>
          <strong>89 Lacs*</strong>
        </div>

        {/* Project Description */}
        <div className="overview-card">
          <i className="bi bi-journal-text"></i>
          <div>Project Description</div>
          <strong>Group Housing</strong>
        </div>

        {/* Project Type */}
        <div className="overview-card">
          <i className="bi bi-house-door"></i>
          <div>Project Type</div>
          <strong>Apartment</strong>
        </div>

        {/* Project Area */}
        <div className="overview-card">
          <i className="bi bi-aspect-ratio"></i>
          <div>Project Area</div>
          <strong>62 acres</strong>
        </div>

        {/* Sizes */}
        <div className="overview-card">
          <i className="bi bi-grid-1x2"></i>
          <div>Sizes</div>
          <strong>2 & 3 BHK</strong>
        </div>

        {/* Project Size */}
        <div className="overview-card">
          <i className="bi bi-layers"></i>
          <div>Project Size</div>
          <strong>3340 units</strong>
        </div>

        {/* Avg Price */}
        <div className="overview-card">
          <i className="bi bi-currency-rupee"></i>
          <div>Avg. Price</div>
          <strong>₹14.2 K/sqft</strong>
        </div>

        {/* Launch Date */}
        <div className="overview-card">
          <i className="bi bi-calendar-event"></i>
          <div>Launch Date</div>
          <strong>Mar, 2030</strong>
        </div>

        {/* Possession Starts */}
        <div className="overview-card">
          <i className="bi bi-key"></i>
          <div>Possession Starts</div>
          <strong>May, 2025</strong>
        </div>
      </div>
    </section>
  );
}

export default Overview;
