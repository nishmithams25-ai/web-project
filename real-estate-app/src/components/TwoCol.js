import React from "react";
import PropertyDescription from "./PropertyDescription";
import Overview from "./Overview";
import Approvals from "./Approvals";
import ImagesRight from "./ImagesRight";

export default function TwoCol() {
  return (
    <div className="twocol d-flex">
      {/* LEFT column */}
      <div className="left-col flex-grow-1 pe-4">
        <PropertyDescription />
        <Overview />
        <Approvals />
      </div>

      {/* RIGHT column */}
      <div className="right-col">
        <ImagesRight />
      </div>
    </div>
  );
}
