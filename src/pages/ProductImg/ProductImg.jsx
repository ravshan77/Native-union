import React from "react";
import "./ProductImg.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"


const ProductImg = () => {
  const handleWindovOne = () => {
    window.scrollTo({
      top: 1640,
      behavior: "smooth",
    });
  };

  const handleWindovTwo = () => {
    window.scrollTo({
      top: 2180,
      behavior: "smooth",
    });
  };

  const{t,i18n} = useTranslation()


  return (
    <section className="product_img_section">
      <div className="product_img_div">
        <img src="https://cdn.shopify.com/s/files/1/0066/9050/4822/files/charge-and-sync-08.2020_7384d929-0066-449c-907c-86ccb2af6540_1000x.jpg?v=1596649455" />
        <div className="text_btn_div">
          <h2>{t("CHARGING CABLES")}</h2>
          <Link to="/cabeles">
            <Button
              buttonStyle="btn--white"
              buttonPosition="product_img_btn"
              buttonSize="btn--medium"
            >
              {t("shopNow.1")}
            </Button>
          </Link>
        </div>
        <buton
          className="arrows_btns product_img_scroll_btn"
          onClick={handleWindovOne}
        >
          {<ExpandMoreIcon />}
        </buton>
      </div>
      <div className="product_img_div">
        <img src="https://cdn.shopify.com/s/files/1/0066/9050/4822/files/protect-and-carry-08.2020_f9fe2eaa-942f-4857-8aff-d8e604624070_1000x.jpg?v=1596649508" />
        <div className="text_btn_div">
          <h2>{t("PROTECT & CARRY")}</h2>
          <Link to="notebook">
            {" "}
            <Button
              buttonStyle="btn--white"
              buttonPosition="product_img_btn"
              buttonSize="btn--medium"
            >
              {t("shopNow.1")}
            </Button>
          </Link>
        </div>
        <buton
          className="arrows_btns product_img_scroll_btn"
          onClick={handleWindovTwo}
        >
          {<ExpandMoreIcon />}
        </buton>
      </div>
      <div className="product_img_div">
        <img src="https://cdn.shopify.com/s/files/1/0066/9050/4822/files/shop-by-device-08.2020_d4d92078-cf7a-4b0e-aab9-5b5d023a6591_1000x.jpg?v=1596649563" />
        <div className="text_btn_div">
          <h2>{t("AIRPODS CASES")}</h2>
          <Link to="airPods">
            <Button
              buttonStyle="btn--white"
              buttonPosition="product_img_btn"
              buttonSize="btn--medium"
            >
              {t("shopNow.1")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductImg;
