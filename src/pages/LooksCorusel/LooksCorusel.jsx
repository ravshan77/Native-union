import React from "react";
import "./LooksCorusel.css";
import LookCoruselData from "../../data/LookCoruselData/LookCoruselData";
import LookArrows from "./LookArrows";
import LookContent from "./LookContent";
import Button from "../../components/Button/Button";
import { useTranslation } from "react-i18next";


const LooksCorusel = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  let leng = LookCoruselData.length - 1;
  const{t,i18n} = useTranslation()

  return (
    <div className="Look">
      <p className="Explore_title">{t("SHOP OUR")}</p>
      <h1 className="LOOKS_title">{t("LOOKS")}</h1>
      <div className="looks_corusel_container">
        <LookArrows
          prevSlide={() =>
            setActiveIndex(activeIndex < 1 ? leng : activeIndex - 1)
          }
          nextSlide={() =>
            setActiveIndex(activeIndex == leng ? 0 : activeIndex + 1)
          }
        />
        <LookContent activeIndex={activeIndex} />
      </div>
      <Button
        buttonStyle="btn--black"
        buttonPosition="look_corusel_btn"
        buttonSize="btn--large"
        type="button"
      >
        {t("VIWE PRODUCTS")}
      </Button>
    </div>
  );
};

export default LooksCorusel;
