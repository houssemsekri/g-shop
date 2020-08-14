import React, { Fragment, useState, useEffect, useContext } from "react";

import Upcoming from "./components/Upcoming";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SmallBanner from "./components/SmallBanner";
import Footer from "./components/Footer";
import NewsLetter from "./components/NewsLetter";
import Services from "./components/Services";
import Cowndown from "./components/CownDown";
import Product from "./components/Product";
import Mid from "./components/Mid";
import TrailerModal from "./components/TrailerModal";
import { Product as product } from "./store/ProductContext";

function Home({ setgame }) {
  useEffect(() => {
    let games = window.location.hash;
    if (games == "#games") {
      document.getElementById("games").scrollIntoView();
    }
  }, []);
  const [state, setstate] = useState(0);
  const store = useContext(product).state;
  const setState = useContext(product).setstate;

  useEffect(() => {
    const game = document.querySelector("#search");
    setgame(game);
  }, [state]);

  return (
    <Fragment>
      <Header active="true" />
      <Hero />
      <SmallBanner />
      <Upcoming setTrailerModal={setState} />

      <Product />

      <Cowndown />
      <Services />
      <NewsLetter />

      <Footer />
    </Fragment>
  );
}

export default Home;
