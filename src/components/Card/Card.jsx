import React from 'react'
import "./Card.css";

const Card = ({product}) => {
    console.log(product)
    return (
        // <div className="cards b">
        //     {
            <div className="card b">
                <div className="card_img_item b"><img src={product.img}/></div>
                <p className="card_title b">{product.title}</p>
                <p className="card_cost b">{product.cost} UZS</p>
            </div>
// }
//         </div>
    )
}

export default Card
