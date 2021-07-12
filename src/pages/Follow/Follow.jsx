import React from "react";
import "./Follow.css";
import FollowData from "../../data/FollowData/FollowData";
import AddIcon from "@material-ui/icons/Add";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { useTranslation } from "react-i18next";


const Follow = () => {
  const [hidden, setHidden] = React.useState(true);
  const handleHidden = () => {
    setHidden(!hidden);
  };
  const{t,i18n} = useTranslation()


  return (
    <div className="Follow background_f">
      <p className="Explore_title">@NATIVEUNION</p>
      <h1 className="LOOKS_title">{t("Follow US")}</h1>
      <div className={`${hidden ? "follow_cards" : "follow_cards add_hidden"}`}>
        {FollowData?.map((follow, index) => {
          return (
            <div className="follow_card" key={index}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <img src={follow.source} />
            </div>
          );
        })}
      </div>
      <button className="hidden_card_btn" onClick={handleHidden}>
        {hidden ? <AddIcon /> : <KeyboardArrowUpIcon />}
      </button>
    </div>
  );
};

export default Follow;
