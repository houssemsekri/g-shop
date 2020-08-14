import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Product } from "../store/ProductContext";

function Header({ active }) {
  const [state, setstate] = useState({
    home: false,
    cart: false,
    checkout: false,
    contact: false,
  });
  const { sideNav, setsideNav } = useContext(Product);
  useEffect(() => {
    window.scrollTo(1, 1);
    if (window.location.pathname == "/") {
      setstate({
        home: true,
        cart: false,
        checkout: false,
        contact: false,
      });
    }
    if (window.location.pathname == "/cart") {
      setstate({
        home: false,
        cart: true,
        checkout: false,
        contact: false,
      });
    }
    if (window.location.pathname == "/checkout") {
      setstate({
        home: false,
        cart: false,
        checkout: true,
        contact: false,
      });
    }
    if (window.location.pathname == "/contact") {
      setstate({
        home: false,
        cart: false,
        checkout: false,
        contact: true,
      });
    }
  }, []);
  const cart = useContext(Product).cart;
  const handleDeleteCart = useContext(Product).handleDeleteCart;
  let history = useHistory();
  const handleGames = (e) => {
    if (!active) {
      history.push("/#games");
    }
  };
  return (
    <header className="header shop sticky">
      {/* Topbar */}
      <div className="topbar" style={{ visibility: "hidden" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-12">
              {/* Top Left */}
              <div className="top-left">
                <ul className="list-main">
                  <li>
                    <i className="ti-headphone-alt" /> +060 (800) 801-582
                  </li>
                  <li>
                    <i className="ti-email" /> support@shophub.com
                  </li>
                </ul>
              </div>
              {/*/ End Top Left */}
            </div>
            <div className="col-lg-8 col-md-12 col-12">
              {/* Top Right */}
              <div className="right-content">
                <ul className="list-main">
                  <li>
                    <i className="ti-location-pin" /> Store location
                  </li>
                  <li>
                    <i className="ti-alarm-clock" /> <a href="#">Daily deal</a>
                  </li>
                  <li>
                    <i className="ti-user" /> <a href="#">My account</a>
                  </li>
                  <li>
                    <i className="ti-power-off" />
                    <a href="login.html#">Login</a>
                  </li>
                </ul>
              </div>
              {/* End Top Right */}
            </div>
          </div>
        </div>
      </div>
      {/* End Topbar */}
      <div className="middle-inner">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-2 col-12">
              {/* Logo */}
              <div className="logo">
                <a href="index.html">
                  <img src="images/logo.png" alt="logo" />
                </a>
              </div>
              {/*/ End Logo */}
              {/* Search Form */}

              {/*/ End Search Form */}

              {/*/ End Search Form */}
              <div className="mobile-nav" />
            </div>
            <div className="col-lg-8 col-md-7 col-12">
              <div className="search-bar-top" style={{ visibility: "hidden" }}>
                <div className="search-bar">
                  <form>
                    <input
                      name="search"
                      placeholder="Search Products Here....."
                      type="search"
                      style={{ display: "none" }}
                    />
                    <button className="btnn">
                      <i className="ti-search" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-12">
              <div className="right-bar">
                {/* Search Form */}
                <div className="sinlge-bar">
                  <a href="#" className="single-icon">
                    <i className="fa fa-heart-o" aria-hidden="true" />
                  </a>
                </div>
                <div className="sinlge-bar">
                  <a href="#" className="single-icon">
                    <i className="fa fa-user-circle-o" aria-hidden="true" />
                  </a>
                </div>

                <div className="sinlge-bar shopping hh">
                  <a href="#" className="single-icon">
                    <i className="ti-bag" />{" "}
                    <span className="total-count">
                      {cart == "" ? 0 : cart.product.length}
                    </span>
                  </a>
                  {/* Shopping Item */}
                  <div className="shopping-item" style={{ display: "block" }}>
                    <div className="dropdown-cart-header">
                      <span>{cart == "" ? 0 : cart.product.length} Items </span>
                      <Link to="/cart">View Cart</Link>
                    </div>
                    <ul className="shopping-list">
                      {cart != "" &&
                        cart.product.map((el) => {
                          return (
                            el.title && (
                              <li key={el.id}>
                                <a
                                  href="#"
                                  className="remove"
                                  title="Remove this item"
                                  onClick={(e) => handleDeleteCart(el, e)}
                                >
                                  <i className="fa fa-remove" />
                                </a>
                                <a className="cart-img" href="#">
                                  <img
                                    src={el.img}
                                    alt="#"
                                    style={{
                                      width: "70px",
                                      height: "70px",
                                      objectFit: "contain",
                                    }}
                                  />
                                </a>
                                <h4>
                                  <a href="#">{el.title}</a>
                                </h4>
                                <p className="quantity">
                                  {el.qty}x -{" "}
                                  <span className="amount">${el.price}</span>
                                </p>
                              </li>
                            )
                          );
                        })}
                    </ul>
                    <div className="bottom">
                      <div className="total">
                        <span>Total</span>
                        <span className="total-amount">
                          {" "}
                          ${cart == "" ? 0 : cart.total}{" "}
                        </span>
                      </div>
                      <Link to="/checkout" className="btn animate">
                        Checkout
                      </Link>
                    </div>
                  </div>
                  {/*/ End Shopping Item */}
                </div>
                <div className="toog" onClick={() => setsideNav(!sideNav)}>
                  <i className={sideNav ? "ti-close" : "ti-menu"}></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Header Inner */}
      <div className="header-inner">
        <div className="container">
          <div className="cat-nav-head">
            <div className="row">
              <div className="col-lg-9 col-12">
                <div className="menu-area">
                  {/* Main Menu */}
                  <nav className="navbar navbar-expand-lg">
                    <div className="navbar-collapse">
                      <div className="nav-inner">
                        <ul className="nav main-menu menu navbar-nav">
                          <li className={state.home && "active"}>
                            <Link to="/">Home</Link>
                          </li>
                          <li>
                            <a href="#games" onClick={(e) => handleGames(e)}>
                              {" "}
                              Games
                            </a>
                          </li>
                          {/* <li>
                            <a href="#">Service</a>
                          </li> */}
                          {/* <li>
                            <a href="#">
                              Shop
                              <i className="ti-angle-down" />
                              <span className="new">New</span>
                            </a>
                            <ul className="dropdown">
                              <li>
                                <a href="shop-grid.html">Shop Grid</a>
                              </li>
                              <li>
                                <a href="cart.html">Cart</a>
                              </li>
                              <li>
                                <Link to="/checkout">Checkout</Link>
                              </li>
                            </ul>
                          </li> */}
                          <li className={state.cart && "active"}>
                            <Link to="/cart">Cart</Link>
                          </li>
                          <li className={state.checkout && "active"}>
                            <Link to="/checkout">Checkout</Link>
                          </li>
                          <li className={state.contact && "active"}>
                            <Link to="/contact">Contact Us</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                  {/*/ End Main Menu */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*/ End Header Inner */}
    </header>
  );
}

export default Header;
