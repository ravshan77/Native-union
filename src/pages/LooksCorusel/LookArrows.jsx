import React from 'react'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import "./LooksCorusel.css";


const LookArrows = (props) => {
    return (
        <div>
            <span className="arrows_btns arrow_prev" onClick={props.prevSlide}>
            <ArrowBackIosIcon style={{ color: "black" ,width:"15px"}}/>

            </span>
            <span className="arrows_btns arrow_next" onClick={props.nextSlide}>
            <ArrowForwardIosIcon style={{ color: "black" ,width:"15px"}} />

            </span>
            
        </div>
    )
}

export default LookArrows
