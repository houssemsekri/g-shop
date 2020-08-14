import React, { useEffect, useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import query from "query-string";
import "./style.css";
import { useHistory, useParams, useLocation } from "react-router-dom";
import { Product } from "../../store/ProductContext";
function SingleProduct({ scroll, myRef }) {
  const [state, setstate] = useState("");
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);
  let history = useHistory();

  const store = useContext(Product).state;
  const update = useContext(Product).setstate;
  const { cart, setcart } = useContext(Product);

  const location = useLocation();
  const id = query.parse(location.search);
  console.log(id);

  useEffect(() => {
    const game = store.game.find((e) => e._id == id.id);
    setstate(game);
  }, [store.loading]);
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
    state && (
      <section className="product" ref={myRef}>
        <ToastContainer />
        <div className="content">
          <div className="product-image">
            <img src={state.img} alt="" />
          </div>
          <div
            className="content-details"
            style={{ textTransform: "capitalize" }}
          >
            <h3 className="content-title">{state.title}</h3>
            <p>
              <span>Studio :</span> {state.studio}
            </p>
            <p>
              <span>Platform :</span> {state.platform}{" "}
            </p>
            <p>
              <span>Release date :</span> {state.release}
            </p>
            <p>
              <span>Game Type :</span>
              {state.type}
            </p>
            <p>
              <span>Price :</span> {state.price}.99 $
            </p>
            <div>
              <div>
                <a className="btn add-cart" onClick={(e) => addCart(e, state)}>
                  <i
                    className="fa fa-shopping-cart"
                    aria-hidden="true"
                    style={{ paddingRight: "10px" }}
                  ></i>
                  Add To Cart
                </a>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    update({
                      ...store,
                      trailer: state.trailer,
                      trailerModal: true,
                    });
                  }}
                  className="btn trailer"
                >
                  <i className=" ti-eye" style={{ paddingRight: "10px" }} />
                  Watch Trailer
                </a>
              </div>
              <Link to={id.g ? "/" : "/#games"}>
                {" "}
                <i
                  className="fa fa-long-arrow-left"
                  aria-hidden="true"
                  style={{ paddingRight: "10px" }}
                ></i>
                Go back
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
  );
}

export default SingleProduct;
