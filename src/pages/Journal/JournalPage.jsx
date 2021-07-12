import React from "react";
import Button from "../../components/Button/Button";
import "./JurnalPage.css";
import "../../components/Header/Header.css";
import Journal from "./Journal";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory } from "react-router-dom";
import Data from "../../service/Api";
import ModalJon from "../../components/ModalJon/ModalJon";
import Card from "../../components/Card/Card";


const JournalPage = () => {
  const history = useHistory();

  const data = [];

  const filterProduct = Data.filter((card) => {
    if (card.title === "journal") {
      return data.push(card);
    }
  });
  if (filterProduct.length > 0) {
    data.push(filterProduct);
  }
  return (
    <div className="journal-pageB">
            {" "}
            <button className="back-nav" onClick={() => history.goBack()}>
              {" "}
              <ArrowBackIcon />{" "}
            </button>{" "}
      <div className="jurnalPage_img">
        <div className="journal_position">
          <p>DESIGN</p>
          <h3>DESIGNING THE STOW COLLECTION</h3>
          <Button
            buttonStyle="btn--white"
            buttonPosition="junal_page_btn"
            buttonSize="btn--medium"
          >
            READ MORE
          </Button>
        </div>
      </div>
      <Journal />
      <div className="products">
      <div className="product_cards b">
        <ModalJon />
        {data?.map((product, index) => (
          <Card {...product} key={index} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default JournalPage;
