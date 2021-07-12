import React from "react";
import Data from "../../service/Api";
import ModalJon from "../../components/ModalJon/ModalJon";
import Card from "../../components/Card/Card";
import PageNoteFounding from "../404/404"
import { useHistory } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import "../../App.css";

const FilterProduct = ({props}) => {
  const history = useHistory();

    const { match } = props;
    let p = Data && Data.filter(card => card.name == match.params.id)
  return (
    <div className="products">
                  <button onClick={() => history.goBack()} className="filter_back">
              {" "}
              <ArrowBackIcon />{" "}
            </button>{" "}
      <div className="product_cards b">
        <ModalJon />
        {p.length > 0 ? p.map((product) => <Card {...product} key={product.id} />) : <PageNoteFounding />}
      </div>
    </div>
  );
};

export default FilterProduct;