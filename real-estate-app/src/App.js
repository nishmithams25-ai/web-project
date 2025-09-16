import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Rail from "./components/Rail";
import Header from "./components/Header";
import TwoCol from "./components/TwoCol";
import Amenities from "./components/Amenities";
import Plans from "./components/Plans";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="container">
      <div className="layout">
        <Rail />
        <div>
          <Header />
          <TwoCol />
          <Amenities />
          <Plans />
          <Footer />
        </div>
      </div>
    </div>
  );
}
