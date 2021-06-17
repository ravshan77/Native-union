import React, { useEffect, useState } from "react";
import "./ProductCorusel.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "../../components/Button/Button";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';


import ProductDataOneSlide from "../../data/ProductCoruselData/ProductDataOneSlide";
import ProductDataTwoSlide from "../../data/ProductCoruselData/ProductDataTwoSlide"

const ProductCorusel = () => {

  const handleWindov = () => {
    window.scrollTo({
      top: 600,
      behavior: "smooth",
    });
  };

  const [products, setProducts] = useState(ProductDataOneSlide);
  const [index, setIndex] = React.useState(0);
let [position, setPostion] = useState("")
const DataLinght = products.length-1
useEffect(() =>{
  if (index < 0) {
    setIndex(0)
  }
},[index])

if (index <= 0) {
  position="";
}
 else if (index === 1 ){
  position="scroll_one"
} else if (index === 2 ){
  position="scroll_two"
}
else if (index === 3 ){
  position="scroll_three"
}
else if (index === 4 ){
  position="scroll_four"
}
else if (index === 5 ){
  position="scroll_five"
} else if (index >= DataLinght ){
  position="scroll_five"
}else{
  position="scroll_sex"
  setIndex(5)
}

const [slideOne,setSlideOne]= React.useState(true)
const [slideTwo,setSlideTwo]= React.useState(false)
  const handleSlideOne = () => {
    setSlideOne(true);
    setSlideTwo(false)
    setProducts(ProductDataOneSlide)

  }
  const handleSlideTwo = () => {
    setSlideTwo(true);
    setSlideOne(false);
    setProducts(ProductDataTwoSlide)
  }


  return (
    <section className="product background_f">
      <button className="arrows_btns scroll_one_page" onClick={handleWindov}>
        {<ExpandMoreIcon />}
      </button>
      <p className="Explore_title">EXPLORE OUR</p>
    <div className="Explore_text_div">
      <p className={`${slideOne ? "Explore_text fontSize" : "Explore_text_of fontSize"}`} onClick={handleSlideOne}>BEST SELLERS</p>
      <p className={`${slideTwo ? "Explore_text fontSize" : "Explore_text_of fontSize"}`} onClick={handleSlideTwo}>NEW RELEASES </p>
    </div>
      {/*  */}

      <div className="product_corusel">
        <div className={`scroll_corusel ${position}`}>
          {products.map((product) => {
            return (
              <div className="corusel_cards">
                <div className="corusel_img">
                  <img src={product.img} />
                </div>
                <h4>{product.title}</h4> 
                <p>{product.cost} uzs</p>
              </div>
            );
          })}
        </div>
      <button className="arrows_btns product_prev" onClick={() => setIndex(index - 1)}>
        <NavigateBeforeIcon />
      </button>
      <button className="arrows_btns product_next" onClick={() => setIndex(index + 1)}>
        <NavigateNextIcon />
      </button>
      </div>
      {/*  */}
      <Button buttonStyle="btn--black" buttonPosition="product_corusel_btn" buttonSize="btn--medium" type="button">viwe products</Button>
    </section>
  );
};

export default ProductCorusel;


