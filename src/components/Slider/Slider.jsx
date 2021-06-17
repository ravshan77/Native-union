import React,{useEffect} from "react";
import SliderData from "../../data/SliderData/SliderData";
import Arrows from "./Arrows";
import Dots from "./Dots";
import SliderContent from "./SliderContent";
import "./Slider.css";


const len = SliderData.length - 1;

const Slider= () => {
  
  const [activeIndex, setActiveIndex] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() =>{
        setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    },5000)
      return () => {
          clearInterval(interval)
      }
  },[activeIndex])


  return (
    <div className="slider-container">
      <SliderContent activeIndex={activeIndex} />
      <Arrows
        prevSlide = {() => setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)}
        nextSlide = {() => setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)}
      />
      <Dots activeIndex={activeIndex} onClick={activeIndex => setActiveIndex(activeIndex)} />
    </div>
  );
};

export default Slider;
