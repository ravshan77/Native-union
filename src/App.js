import React from "react";
import "./App.css";
import TopHeader from "./components/TopHeader/TopHeader.jsx";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Main from "./pages/Main/Main";
import Footer from "./pages/Footer/Footer.jsx";
import AllProducts from "./pages/AllProducts/AllProducts";
import AirPods from "./pages/AirPods/AirPods.jsx";
import Cabeles from "./pages/Cables/Cables";
import Phone from "./pages/Phone/Phone";
import NoteBook from "./pages/NoteBook/NoteBook";
import FilterName from "./pages/FilterName/filterName.jsx"
import PageNoteFounding from "./pages/404/404.jsx"
import JournalPage from "./pages/Journal/JournalPage"
import FirebaseAuth from "./config/SignInAndSignUp";

function App() {

  return (
    <div>
      <TopHeader />
      <Route render={(props) => <Header props={props} />} />
      <Switch>
        <Route path="/" exact render={() => <Main />} />
        <Route path="/products" render={() => <AllProducts />} />
        <Route path="/airPods" render={() => <AirPods />} />
        <Route path="/cabeles" render={() => <Cabeles />} />
        <Route path="/phone" render={() => <Phone />} />
        <Route path="/allProducts" render={() => <AllProducts />} />
        <Route path="/notebook" render={() => <NoteBook />} />
        <Route path="/journal" render={() => <JournalPage />} />
        <Route path="/404" render={(props) => <PageNoteFounding props={props} />} />
        <Route path="/filterProduct/:id" render={(props) => <FilterName props={props} />} />
        <Route path="/store" exact render={() => <FirebaseAuth />} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

