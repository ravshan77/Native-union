import React from "react";
import Card from "../../components/Card/Card";
import data from "../../service/Api";

const AllProducts = () => {
  const [productName, setProductName] = React.useState("Redmi");
  let products = data.filter((p) => {
    return p.title === productName;
  });
  if (productName == "pust") {
    products = data.map((p) => {
      return p;
    });
  }

  return (
    <div className="products">
      {products.map((pro) => (
        <Card product={pro} />
      ))}
    </div>
  );
};

export default AllProducts;
