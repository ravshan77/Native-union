import React from "react";
import SliderData from "../../data/SliderData/SliderData";
import Button from "../Button/Button";
import "./Slider.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"


const SliderContent = (props) => {
  const{t,i18n} = useTranslation()
  return (
    <section>
      {SliderData.map((slider, index) => (
        <div
          key={index}
          className={
            index === props.activeIndex ? "slides  active" : "inactive"
          }
        >
          <img className="slide-image" src={slider.url} />
          <h3 className="slide-title"> {slider.title}</h3>
          <p className="slide-text">{slider.description}</p>
          <Link to="/phone">
            {" "}
            <Button
              buttonStyle="btn--white"
              buttonPosition="section_one"
              buttonSize="btn--medium"
              type="button"
            >
              {t("shopNow.1")}
            </Button>{" "}
          </Link>
        </div>
      ))}
    </section>
  );
};

export default SliderContent;
