import React from 'react'
import "./LooksCorusel.css";


const LooksColorContent = ({products, act}) => {
    return (
        <div className="">
            {products.map((color,index) => (
                <div key={index} className={index === act ? "activeColor" : "inactive"}>
                    <div className="color_Box">
                      <img className="img" src={color.product_img} />
                      <p className="color_product_info">{color.product_title}</p>
                      <p >{color.product_cost}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default LooksColorContent
