import React from "react";
import "./Journal.css";
import JournalData from "../../data/JournalData/JournalData";
import {Link} from "react-router-dom"
import { useTranslation } from "react-i18next";


const JournalContent = (props) => {
  const{t,i18n} = useTranslation()


  return (
    <div className="journal_cards">
      {JournalData.map((jurnal, index) => {
        return (
          <div
            key={index}
            className={
              index === props.activeIndex ? "journal_card" : "jurnal_none"
            }
          >
            <div className="journal_img">
              <img src={jurnal.img} />
            </div>
            <h3 className="journal_card_title">{jurnal.title}</h3>
            <p className="journal_card_text">{jurnal.text}</p>
            <Link to="/journal"><button className="journal_read_mode">{t("Read mode")}</button></Link>
          </div>
        );
      })}
    </div>
  );
};

export default JournalContent;
