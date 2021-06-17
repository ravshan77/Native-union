import React from 'react'
import "./Journal.css"
import JournalContent from "./JournalContent";
import JournalDots from "./JournalDots"


const Journal = () => {
    const [activeIndex, setActiveIndex]= React.useState(0)

    return (
        <div className="background_f">
            <div className="journal background_f">
            <h1 className="Journal_title">JOURNAL</h1>
            <JournalContent activeIndex={activeIndex}/>
            <JournalDots activeIndex={activeIndex} onClick={activeIndex => setActiveIndex(activeIndex)} />
            </div>
        </div>
    )
}

export default Journal;
