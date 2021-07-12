import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import "./SubCard.css";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Button from "../Button/Button";
import { useSelector, useDispatch } from "react-redux";
import {
  addCard,
  decreaseCard,
  removeCard,
} from "../../store/item/item-action";
import Empty from "../../assets/empty card/i.webp";

const useStyles = makeStyles((theme) => ({
  IconButton: {
    color: "#FFF",
  },
}));

export default function SubCard({ setSubCardDiv }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  // Total cost
  const cards = useSelector((state) => state.StoreData.card);
  const total = cards.map((card) => card.totalCost * card.count);
  const total_totalCost = total.reduce((a, b) => a + b, 0);

  return (
    <div className="SubCard">
      {total.length > 0 ? (
        <>
          {" "}
          <div className="subCard">
            {cards.map((card) => {
              return (
                <div className="Sub_cards">
                  <div className="cards_img_box">
                    <img src={card.img} />
                  </div>
                  <div className="cards_info_box">
                    <div className="product_title">{card.name}</div>
                    <div className="product_cost">
                      {new Intl.NumberFormat("en-US", {
                        style: "decimal",
                      }).format(
                        (card.count < 2 ? card.cost : card.totalCost).toFixed(2)
                      )} uzs
                    </div>
                    <div className="product_btns">
                      <div className="calc_item">
                        <button onClick={() => dispatch(addCard({ ...card }))}>
                          <AddIcon />
                        </button>
                        <span>{card.count}</span>
                        <button onClick={() => dispatch(decreaseCard(card))}>
                          <RemoveIcon />
                        </button>
                      </div>
                      <div
                        className="remove_item"
                        onClick={() => dispatch(removeCard(card))}
                      >
                        <button>Remove</button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>{" "}
          <hr></hr>
          <div className="Sub_GoStore">
            <div className="total_cost">
              <p>Total: </p>
              <p>
                {new Intl.NumberFormat("en-US", { style: "decimal" }).format(
                  total_totalCost.toFixed(2)
                )}{" "}
                uzs
              </p>
            </div>
            <Link to="/store">
              <Button
                buttonStyle="btn--white"
                buttonPosition="sub_card_btn"
                buttonSize="btn--large"
                onClick={(prev) => setSubCardDiv(!prev)}
              >
                view cart
              </Button>
            </Link>
          </div>{" "}
        </>
      ) : (
        <div className="subCard">
          <div className="empty_Card">
            <div className="empty_Card_img">
              <img src={Empty} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
