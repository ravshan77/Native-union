import React from "react";
import "./LooksCorusel.css";

const Dots = ({ act, onClick, products }) => {
  return (
    <div className="all-dots_look">
      {products.map((_, index) => (
        <span
          key={index}
          className={`${act === index ? "dots active-dots" : "dots"}`}
          onClick={(event) => onClick((event.target.value = index))}
        ></span>
      ))}
    </div>
  );
};

export default Dots;
