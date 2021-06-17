import React from "react";
import "./App.css";
import TopHeader from "./components/TopHeader/TopHeader.jsx";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Main from "./pages/Main/Main";
import Footer from "./pages/Footer/Footer.jsx";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './store/item/rootReducer'
import AllProducts from "./pages/AllProducts/AllProducts";


function App() {
  return (
    <div>
      <TopHeader />
      <Header />
      <Switch>
      <Route path="/" exact render={() => <Main />} />
      <Route path="/products" render={() => <AllProducts />} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;


  // const value = useSelector((state) => state.card)
  // const dispatch = useDispatch()
  //  <div>
  //   <button
  //     aria-label="Increment value"
  //     onClick={() => dispatch(increment())}
  //   >
  //     Increment
  //   </button>
  //   <span>{value}</span>
  //   <button
  //     aria-label="Decrement value"
  //     onClick={() => dispatch(decrement())}
  //   >
  //     Decrement
  //   </button>
  // </div>
