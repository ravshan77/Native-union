import React from 'react'
import "./LooksCorusel.css"
import LookCoruselData from "../../data/LookCoruselData/LookCoruselData"
import LookArrows from "./LookArrows"
import LookContent from "./LookContent"
import Button from "../../components/Button/Button"

const LooksCorusel = () => {
const [activeIndex,setActiveIndex]=React.useState(0)
let leng=LookCoruselData.length - 1;
    return (
        <div className="Look">
            <p className="Explore_title">SHOP OUR</p>
            <h1 className="LOOKS_title">LOOKS</h1>
            <div className="looks_corusel_container">
                 <LookArrows 
                 prevSlide={()=> setActiveIndex(activeIndex < 1 ? leng : activeIndex -1)}
                 nextSlide={()=> setActiveIndex(activeIndex== leng ? 0 : activeIndex + 1)}/>
                 <LookContent activeIndex={activeIndex} />
            </div>
            <Button buttonStyle="btn--black" buttonPosition="look_corusel_btn" buttonSize="btn--large" type="button">view this product</Button>

        </div>
    )
}

export default LooksCorusel
