import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import "./SubCard.css";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Button from "../Button/Button"
import ClickAwayListener from "@material-ui/core/ClickAwayListener";


const useStyles = makeStyles((theme) => ({
  IconButton: {
    color: "#FFF",
  },
}));

export default function SubCard(setSubCardDiv) {
  const classes = useStyles();



  return (
//     <ClickAwayListener
//     mouseEvent="onMouseDown"
//     touchEvent="onTouchStart"
//     // onClick={handleClickAway}
//   >
    <div className="SubCard">
        <div className="subCard">
            <div className="Sub_cards">
                <div className="cards_img_box">
                    <img src="https://cdn.shopify.com/s/files/1/0066/9050/4822/products/RiseDock_2_120x.png?v=1622774505" />
                </div>
                <div className="cards_info_box">
                    <div className="product_title">PRODUCT</div>
                    <div className="product_cost">145 000 sum</div>
                    <div className="product_btns">
                    <div className="calc_item">
                        <button>
                        <AddIcon />
                        </button>
                        <span>{1}</span>
                        <button>
                        <RemoveIcon />
                        </button>
                    </div>
                    <div className="remove_item">
                        <button>Remove</button>
                    </div>
                    </div>
                </div>
            </div>
            
            <div className="Sub_cards">
                <div className="cards_img_box">
                    <img src="https://cdn.shopify.com/s/files/1/0066/9050/4822/products/RiseDock_0046_120x.jpg?v=1622774499" />
                </div>
                <div className="cards_info_box">
                    <div className="product_title">PRODUCT</div>
                    <div className="product_cost">200 000 sum</div>
                    <div className="product_btns">
                    <div className="calc_item">
                        <button>
                        <AddIcon />
                        </button>
                        <span>{2}</span>
                        <button>
                        <RemoveIcon />
                        </button>
                    </div>
                    <div className="remove_item">
                        <button>Remove</button>
                    </div>
                    </div>
                </div>
            </div>
      </div><hr></hr>
      <div className="Sub_GoStore">
          <div className="total_cost">
              <p>Total: </p>
              <p>345 000 uzs</p>
          </div>
          <Button buttonStyle="btn--white" buttonPosition="sub_card_btn" buttonSize="btn--large">view cart</Button>
      </div>
    </div>
  );
}
