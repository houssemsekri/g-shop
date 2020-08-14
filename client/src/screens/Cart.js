import React, { Fragment } from "react";
import Header from "../components/Header";
import SingleProd from "./components/SingleProduct";
import Mid from "../components/Mid";
import CownDown from "../components/CownDown";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Carts from "./components/Cart";
function Cart() {
  return (
    <Fragment>
      <Header />
      <Carts />

      <CownDown />
      <Services />
      <Footer />
    </Fragment>
  );
}

export default Cart;
