import React from "react";
import "./Journal.css";
import JournalData from "../../data/JournalData/JournalData";

const JournalContent = (props) => {
  return (
    <div className="journal_cards">
        {JournalData.map((jurnal, index) => {
            return (
                <div key={index} className={index === props.activeIndex ? "journal_card" : "jurnal_none"}>
                    <div className="journal_img" ><img src={jurnal.img} /></div>
                    <h3 className="journal_card_title">{jurnal.title}</h3>
                    <p className="journal_card_text">{jurnal.text}</p>
                    <button className="journal_read_mode">Read mode</button>
                </div>
            )
        })}
    </div>
  );
};

export default JournalContent;




{/* {JournalData.map((journal, index) => {
  return (
    <div key={index} className={index === props.activeIndex ? "journal_card_item b" : ""}>
      <div>
        <img src={journal.img} className="look_img_item img b" />
      </div>
      <h3>{journal.title}</h3>
      <p>{journal.text}</p>
      <button className="card_Read_more">Read more</button>
    </div>
  );
})} */}