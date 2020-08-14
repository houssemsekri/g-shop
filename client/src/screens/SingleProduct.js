import React, { Fragment } from "react";
import Header from "../components/Header";
import SingleProd from "./components/SingleProduct";
import Mid from "../components/Mid";
import CownDown from "../components/CownDown";
import Services from "../components/Services";
import Footer from "../components/Footer";
export default function SingleProduct({ scroll, myRef }) {
  return (
    <Fragment>
      <Header />
      <SingleProd scroll={scroll} myRef={myRef} />

      <CownDown />
      <Services />
      <Footer />
    </Fragment>
  );
}
