import React from 'react'
import SliderData from "../../data/SliderData/SliderData"
import Button from "../Button/Button"
import "./Slider.css"

const SliderContent = (props) => {
    return (
        <section>
            {SliderData.map((slider,index) => (
                <div key={index} className={index === props.activeIndex ? "slides  active" : "inactive"}>
                    <img className="slide-image" src={slider.url} />
                    <h3 className="slide-title"> {slider.title}</h3>
                    <p className="slide-text">{slider.description}</p>
                    <Button buttonStyle="btn--white" buttonPosition="section_one" buttonSize="btn--medium" type="button">
                                    SHOP NOW
                    </Button>

                </div>
            ))}
            
        </section>
    )
}

export default SliderContent
