import React from "react";
import { useSelector, useDispatch } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import {
  addCard,
  decreaseCard,
  removeCard,
} from "../../store/item/item-action";
import Button from "../../components/Button/Button";
import "./Stepper1.css";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    width: "95%",
    height: "100px",
    margin: "25px auto",
  },
  margin: {
    padding: "0px",
    color: "black",
    cursor: "grab",
  },
}));

const Stepper1 = ({ handleNext, Input, register = { register } }) => {
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();

  const cards = useSelector((state) => state.StoreData.card);

  // Total cost Products
  const total = cards.map((card) => card.cost * card.count);
  const total_cost = total.reduce((a, b) => a + b, 0);

  return (
    <div className="first_Store">
      <div className="all_Store_data">
        <p className="store_korzenkaText">Store</p>
        <div className="topShadov_store"></div>
        {/* <div className="store_scroling"> */}
        {cards.length &&
          cards.map((data) => {
            return (
              <div className="store_cards">
                <div className="store_cards_items">
                  <div className="cards_imge_item">
                    <img className="cards_imge_item_img" src={data.img} />
                  </div>
                  <div className="cards_label_item">
                    <p className="cards_label_item_label">{data.name}</p>
                  </div>
                  <div className="cards_buttons_item">
                    <div className="cards_buttons_item_button">
                      <button
                        className="store_Btns"
                        onClick={() => dispatch(decreaseCard({ ...data }))}
                      >
                        -
                      </button>
                      <span className="store_Btns">{data.count}</span>
                      <button
                        className="store_Btns"
                        onClick={() => dispatch(addCard({ ...data }))}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="cards_cost_item">
                    <p className="cards_cost_item_text">
                      {new Intl.NumberFormat("en-US", {
                        style: "decimal",
                      }).format(data.totalCost)}{" "}
                      UZS
                    </p>
                  </div>
                  <div className="cards_delete_item">
                    <div style={{ width: "100%" }}>
                      <IconButton
                        aria-label="delete"
                        className={classes.margin}
                        onClick={() => dispatch(removeCard({ ...data }))}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </div>
                  </div>
                </div>
                <hr style={{ marginTop: "2%" }} />
              </div>
            );
          })}
        {/* </div> */}
        <div className="topShadov_store"></div>
        <div className="proma_code">
          <div className="proma_code_input">
            <Input label="proma code" type="text" register={register} />
          </div>
          <Button
            buttonStyle="btn--white"
            buttonPosition="stepper2_form_btn"
            buttonSize="btn--medum"
            onClick={() => history.goBack()}
          >
            {" "}
            <FingerprintIcon />{" "}
          </Button>{" "}
          <p>
            hurry up we have a stock season! enter the promo code and get a 10%
            discount{" "}
          </p>
        </div>
        <div className="store_bottom_data">
          <p className="store_total_Cost">
            Total price:{" "}
            {new Intl.NumberFormat("en-US", { style: "decimal" }).format(
              total_cost
            )}{" "}
            UZS
          </p>
        </div>
      </div>
      <Button
        buttonStyle="btn--white"
        buttonPosition="stepper2_form_btn"
        buttonSize="btn--medum"
        onClick={() => history.goBack()}
      >
        Back
      </Button>
      <Button
        type="submit"
        buttonStyle="btn--white"
        buttonPosition="stepper2_form_btn"
        buttonSize="btn--medum"
        onClick={handleNext}
      >
        continue
      </Button>
    </div>
  );
};

export default Stepper1;
