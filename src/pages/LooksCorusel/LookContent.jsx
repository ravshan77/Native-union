import React, { useState } from "react";
import LooksColorArrows from "./LooksColorArrows";
import LooksColorContent from "./LooksColorContent";
import "./LooksCorusel.css";
import LookCoruselData from "../../data/LookCoruselData/LookCoruselData";
import LookColorDots from "./LookColorDots";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


const LookContent = ({ activeIndex }) => {
  const [act, setAct] = useState(0);
  const{t,i18n} = useTranslation()

  return (
    <>
      {LookCoruselData.map((data, index) => {
        let len = data.products.length - 1;

        return (
          <div
            key={index}
            className={index === activeIndex ? "active w" : "inactive"}
          >
            <div className="look_box">
              <div className="look_img_item">
                <img src={data.img} />
              </div>
              <div className="look_slider_item">
                <div className="color_item">
                  <LooksColorArrows
                    prevSlide={() => setAct(act < 1 ? len : act - 1)}
                    nextSlide={() => setAct(act == len ? 0 : act + 1)}
                  />
                  <LookColorDots
                    products={data.products}
                    act={act}
                    onClick={(act) => setAct(act)}
                  />
                  <LooksColorContent act={act} products={data.products} />
                  <Link to="/phone">
                    {" "}
                    <Button
                      buttonStyle="btn--black"
                      buttonPosition="product_corusel_btn"
                      buttonSize="btn--large"
                      type="button"
                    >
                      {t("VIWE PRODUCTS")}
                    </Button>{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default LookContent;
