import React from 'react';
import "./Button.css"

 const STYLES = ["btn--black", "btn--white"]
 const SIZES =["btn--medium", "btn--large"]
 const POSITION =["section_one","sub_card_btn","product_corusel_btn","product_img_btn","look_corusel_btn","footer_btn"]

const Button = ({
    children,
    onClick,
    buttonSize,
    buttonStyle,
    buttonPosition,
    type,
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    const ckeckButtonPosition = POSITION.includes(buttonPosition) ? buttonPosition : POSITION[0];

     return (
            <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${ckeckButtonPosition}`} onClick={onClick} type={type}>
                {children}
            </button>
    );
}
 

 
export default Button;