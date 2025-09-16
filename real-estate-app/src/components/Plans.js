import React from "react";
import image4 from "../asset_images/image4.jpg";

function Plans() {
  return (
    <>
      {/* 1 Acre Master Plan */}
      <div className="sec">1 Acre Master plan</div>
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        {[1, 2, 3].map((_, index) => (
          <div key={index} style={{ flex: "1 1 320px" }} className="plan-card">
            <div className="plan-media">
              <img src={image4} alt="1.2 acres" />
            </div>
            <div className="plan-body">
              <div className="vv" style={{ fontSize: "14px" }}>
                1.2 Acres
              </div>
              <div className="k">Super Built up Area</div>
              <div className="price">Price 89L+ Charges</div>
            </div>
          </div>
        ))}
      </div>

      {/* 3 Acre Master Plan */}
      <div className="sec">3 Acre Master Plan</div>
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        {[1, 2, 3, 4, 5, 6, 7].map((_, index) => (
          <div key={index} style={{ flex: "1 1 320px" }} className="plan-card">
            <div className="plan-media">
              <img src={image4} alt="2.8 acres" />
            </div>
            <div className="plan-body">
              <div className="vv" style={{ fontSize: "14px" }}>
                2.8 Acres
              </div>
              <div className="k">Super Built up Area</div>
              <div className="price">Price 2.2cr+ Charges</div>
            </div>
          </div>
        ))}
      </div>
    </>

  );
}

export default Plans;