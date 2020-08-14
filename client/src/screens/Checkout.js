import React, { Fragment } from "react";
import Header from "../components/Header";
import SingleProd from "./components/SingleProduct";
import Mid from "../components/Mid";
import CownDown from "../components/CownDown";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Checkoutcom from "./components/Checkoutcom";
function Checkout() {
  return (
    <Fragment>
      <Header />
      <Checkoutcom />

      <Services />
      <Footer />
    </Fragment>
  );
}

export default Checkout;
