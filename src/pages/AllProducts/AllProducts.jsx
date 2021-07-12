import React from "react";
import Data from "../../service/Api";
import ModalJon from "../../components/ModalJon/ModalJon"
import Card from "../../components/Card/Card";

const AllProducts = () => {
  // const data = [];


  return (
    <div className="products">
      <div className="product_cards b">
        <ModalJon />
        {Data?.map((product, index) => (
          <Card {...product} key={index} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;