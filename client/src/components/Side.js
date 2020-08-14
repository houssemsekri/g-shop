import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Product } from "../store/ProductContext";
function Side() {
  const { sideNav, setsideNav } = useContext(Product);
  const handleClick = () => {
    setsideNav(!sideNav);
  };
  let history = useHistory();
  const handleGames = (e) => {
    if (window.location.href != "/") {
      history.push("/#games");
    }
  };
  return (
    <div className={sideNav ? "nav2" : "nav2 close"}>
      <ul className="nav2 main-menu menu navbar-nav ">
        <li className="active" onClick={handleClick}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={handleClick}>
          <a href="/#games" onClick={(e) => handleGames(e)}>
            Games
          </a>
        </li>
        <li onClick={handleClick}>
          <Link to="/cart">Cart</Link>
        </li>
        <li onClick={handleClick}>
          <Link to="/Checkout">Checkout</Link>
        </li>
        <li onClick={handleClick}>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
}

export default Side;
