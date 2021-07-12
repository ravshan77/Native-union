import React from "react";
import Data from "../../service/Api";
import ModalJon from "../../components/ModalJon/ModalJon"
import Card from "../../components/Card/Card";

const Phone = () => {
  const data = [];

  const filterProduct = Data.filter((card) => {
    if (card.title === "phone") {
      return data.push(card);
    }
  });
  if (filterProduct.length > 0) {
    data.push(filterProduct);
  }
  return (
    <div className="products">
      <div className="product_cards b">
        <ModalJon />
        {data?.map((product, index) => (
          <Card {...product} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Phone;
