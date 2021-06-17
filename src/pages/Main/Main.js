import React from "react";
import Slider from "../../components/Slider/Slider";
import ProductCorusel from "../ProductCorusel/ProductCorusel";
import ProductImg from "../ProductImg/ProductImg";
import LooksCorusel from "../LooksCorusel/LooksCorusel";
import About from "../About/About";
import Journal from "../Journal/Journal";
import Sponsors from "../Sponsors/Sponsors";
import Follow from "../Follow/Follow";

const Main = () => {
  return (
    <div className="main">
      <Slider />
      <ProductCorusel />
      <ProductImg />
      <LooksCorusel />
      <About />
      <Journal />
      <Sponsors />
      <Follow />
    </div>
  );
};

export default Main;
