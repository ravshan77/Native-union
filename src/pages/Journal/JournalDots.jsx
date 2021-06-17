import React from 'react'
import JournalData from '../../data/JournalData/JournalData'

const JournalDots = (props) => {
    return (
        <div className="journal_dots">
            {JournalData.map((journal, index) => (
                <span 
                key={index}    
                className={`${props.activeIndex === index ? "dots active-dots" : "dots"}`}
                onClick={(event) => props.onClick(event.target.value = index)}>

                </span>
            ))}
        </div>
    )
}

export default JournalDots
