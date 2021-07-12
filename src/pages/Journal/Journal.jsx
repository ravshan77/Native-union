import React from "react";
import "./Journal.css";
import JournalContent from "./JournalContent";
import JournalDots from "./JournalDots";
import { useTranslation } from "react-i18next";


const Journal = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const{t,i18n} = useTranslation()

  return (
    <div className="background_f">
      <div className="journal background_f">
        <h1 className="Journal_title">{t("JOURNAL")}</h1>
        <JournalContent activeIndex={activeIndex} />
        <JournalDots
          activeIndex={activeIndex}
          onClick={(activeIndex) => setActiveIndex(activeIndex)}
        />
      </div>
    </div>
  );
};

export default Journal;
