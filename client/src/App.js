import React, { useState, useRef, useContext, useEffect } from "react";

import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import Home from "./Home";
import SingleProduct from "./screens/SingleProduct";
import Cart from "./screens/Cart";
import { Product } from "./store/ProductContext";
import TrailerModal from "./components/TrailerModal";
import Checkout from "./screens/Checkout";
import Side from "./components/Side";
import Contact from "./screens/Contact";

function App() {
  const store = useContext(Product).state;
  const setstate = useContext(Product).setstate;

  const [game, setgame] = useState("");

  return (
    <React.Fragment>
      {store.trailerModal && <TrailerModal setTrailerModal={setstate} />}
      <Router>
        <Side />
        <Switch>
          <Route path="/" exact>
            {" "}
            <Home setgame={setgame} />{" "}
          </Route>

          <Route path="/single-product">
            {" "}
            <SingleProduct />{" "}
          </Route>
          <Route path="/cart">
            {" "}
            <Cart />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
