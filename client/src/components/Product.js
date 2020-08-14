import React, { useState, useEffect, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useHistory } from "react-router-dom";
import Paggination from "./Paggination";
import { Product as product } from "../store/ProductContext";
function Product() {
  const store = useContext(product).state;
  const { cart, setcart } = useContext(product);
  let ProductListinit = store.game;

  let history = useHistory();
  const handleClick = (e, id) => {
    e.preventDefault();

    history.push("/single-product?id=" + id);
  };

  const [ProductList, setProductList] = useState(ProductListinit);

  const {
    currentPage,
    setcurrentPage,
    productsPerPage,
    setproductsPerPage,
    indexOfLastProduct,
    indexOfFirstProduct,
    paginate,
  } = useContext(product);
  const [gameTitle, setgameTitle] = useState("");
  const currentProducts =
    ProductList && ProductList.slice(indexOfFirstProduct, indexOfLastProduct);

  useEffect(() => {
    const newGameTitle = gameTitle.toUpperCase().trim();
    let newProduct = [];
    ProductListinit.map((e) => {
      const title = e.title.trim().toUpperCase();
      if (title.indexOf(`${newGameTitle}`) > -1) {
        newProduct = [...newProduct, e];
      }
    });
    setProductList(newProduct);
    if (gameTitle != "") {
      setcurrentPage(1);
    }
  }, [gameTitle]);
  let mapProduct = [];
  !ProductList && setProductList(ProductListinit);
  const addCart = (e, element) => {
    e.preventDefault();
    let newProduct = [];
    if (cart.product) {
      newProduct = [...cart.product];
    }
    let exist = newProduct.findIndex((el) => {
      return element._id == el.id;
    });
    if (exist >= 0) {
      newProduct[exist].qty = newProduct[exist].qty + 1;
    } else {
      newProduct.push({
        title: element.title,
        qty: 1,
        img: element.img,
        price: element.price,
        id: element._id,
      });
    }

    let newtotal = 0;
    newProduct.map((e) => {
      if (e.price) {
        return (newtotal =
          parseFloat(e.price) * parseInt(e.qty) + parseFloat(newtotal));
      }
    });
    let local = {
      ...cart,
      product: newProduct,
      total: newtotal,
    };
    setcart({
      ...cart,
      product: newProduct,
      total: newtotal,
    });
    localStorage.setItem("cartShop", JSON.stringify(local));
    toast(element.title + "  added to cart with succes");
  };
  return (
    <div className="product-area section">
      <ToastContainer />

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h2>Games</h2>
              <span id="shop"></span>
            </div>
          </div>
        </div>
        <form class="form-inline d-flex justify-content-center md-form form-sm">
          <input
            class="form-control form-control-sm mr-3 w-75"
            id="search"
            type="text"
            placeholder="Search Games Here ..."
            aria-label="Search"
            onChange={(e) => setgameTitle(e.target.value)}
          />
          <i class="fa fa-search" aria-hidden="true" id="search-icon"></i>
        </form>
        <div className="row">
          <div className="col-12">
            <div className="product-info">
              <div className="tab-content" id="myTabContent">
                {/* Start Single Tab */}

                <div
                  className="tab-pane fade show active"
                  id="man"
                  role="tabpanel"
                >
                  <div className="tab-single">
                    <div id="games"></div>
                    <div className="row">
                      {currentProducts.map((element, i) => {
                        return (
                          <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product" key={element._id}>
                              <div className="product-img">
                                <a onClick={(e) => e.preventDefault()}>
                                  <img
                                    className="default-img"
                                    src={element.img}
                                    alt="#"
                                  />
                                  <img
                                    className="hover-img"
                                    src={element.img}
                                    alt="#"
                                  />
                                  <span className="new">New</span>
                                </a>
                                <div className="button-head">
                                  <div className="product-action">
                                    <a
                                      data-toggle="modal"
                                      data-target="#exampleModal"
                                      title="Quick View"
                                      href="#"
                                    >
                                      <i className=" ti-eye" />
                                      <span>More Details </span>
                                      <a
                                        href=""
                                        style={{
                                          transform: "translateY(-4px)",
                                          paddingLeft: "10px",
                                        }}
                                        onClick={(e) =>
                                          handleClick(e, element._id)
                                        }
                                      >
                                        {" "}
                                        More details
                                      </a>
                                    </a>
                                  </div>
                                  <div className="product-action-2">
                                    <a
                                      title="Add to cart"
                                      href="#"
                                      onClick={(e) => addCart(e, element)}
                                    >
                                      Add to cart
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="product-content">
                                <h3>
                                  <a
                                    href="product-details.html"
                                    style={{ textTransform: "capitalize" }}
                                  >
                                    {element.title}
                                  </a>
                                </h3>
                                <div className="product-price">
                                  <span className="old">{element.price}$</span>
                                  <span>{parseInt(element.price) - 0.01}$</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              {ProductList && (
                <Paggination
                  ProductList={ProductList}
                  productsPerPage={productsPerPage}
                  paginate={paginate}
                  currentPage={currentPage}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
