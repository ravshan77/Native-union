import React from "react";
import VanillaTilt from "vanilla-tilt";
import { useDispatch } from "react-redux";
import { showModal, modalCard } from "../../store/item/item-action";
import "./Card.css";

const Card = (product) => {
  const dispatch = useDispatch();
  // VanillaTilt Card 
  VanillaTilt.init(document.querySelectorAll(".c"), {
    max: "35",
    speed: 400,
  });
  VanillaTilt.init(document.querySelectorAll(".c"));

  return (
    <div className="card">
      <div
        className="card_img_item"
        onClick={() => dispatch(modalCard({ ...product }))}
      >
        <img
          className="c"
          onClick={() => dispatch(showModal(true))}
          src={product?.img}
        />
      </div>
      <p className="card_title">{product?.name}</p>
      <p className="card_cost">
        {new Intl.NumberFormat("en-US", { style: "decimal" }).format(
          product?.cost
        )}{" "}
        UZS
      </p>
    </div>
  );
};

export default Card;
