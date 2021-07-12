import React, { useEffect } from "react";
import SliderData from "../../data/SliderData/SliderData";
import Arrows from "./Arrows";
import Dots from "./Dots";
import SliderContent from "./SliderContent";
import "./Slider.css";

const Slider = () => {
  // Slider imges length
  const len = SliderData.length - 1;

  // Active Slider Count
  const [activeIndex, setActiveIndex] = React.useState(0);

  // Active Slider Interval
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [activeIndex]);

  return (
    <div className="slider-container">
      <SliderContent activeIndex={activeIndex} />
      <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />
      <Dots
        activeIndex={activeIndex}
        onClick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
  );
};

export default Slider;
