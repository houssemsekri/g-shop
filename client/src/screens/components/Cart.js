import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Product } from "../../store/ProductContext";

function Cart() {
  const [promo, setPromo] = useState("");
  const handlePromo = (e) => {
    e.preventDefault();
    if (promo === "PROMO-8") {
      setcart({ ...cart, promo: "true" });
      localStorage.setItem(
        "cartShop",
        JSON.stringify({ ...cart, promo: "true" })
      );
      console.log(cart);
      setPromo("");
    }
  };
  useEffect(() => {
    window.scrollTo(1, 1);
  }, []);
  let history = useHistory();
  const { cart, setcart, handleDeleteCart } = useContext(Product);
  const handlePlus = (e, element) => {
    e.preventDefault();
    let newProduct = [...cart.product];
    newProduct = newProduct.map((el) => {
      if (el.id === element.id) {
        el.qty = el.qty + 1;
      }
      return el;
    });
    const newTotal = parseFloat(cart.total) + parseFloat(element.price);
    const local = {
      product: newProduct,
      total: newTotal,
    };
    setcart(local);
    localStorage.setItem("cartShop", JSON.stringify(local));
  };
  const handleMinus = (e, element) => {
    e.preventDefault();

    let newProduct = [...cart.product];
    if (element.qty > 1) {
      newProduct = newProduct.map((el) => {
        if (el.id === element.id) {
          el.qty = el.qty - 1;
        }
        return el;
      });
      const newTotal = parseFloat(cart.total) - parseFloat(element.price);
      const local = {
        product: newProduct,
        total: newTotal,
      };
      setcart(local);
      localStorage.setItem("cartShop", JSON.stringify(local));
    }
  };
  const handleContinue = (e) => {
    e.preventDefault();

    history.push("/#games");
  };

  return (
    <div className="shopping-cart section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* Shopping Summery */}
            <table className="table shopping-summery">
              <thead>
                <tr className="main-hading">
                  <th>PRODUCT</th>
                  <th>NAME</th>
                  <th className="text-center">UNIT PRICE</th>
                  <th className="text-center">QUANTITY</th>
                  <th className="text-center">TOTAL</th>
                  <th className="text-center">
                    <i className="ti-trash remove-icon" />
                  </th>
                </tr>
              </thead>
              {cart.product && cart.product.length > 0 && (
                <tbody>
                  {cart.product.map((element) => {
                    return (
                      <tr key={element.id}>
                        <td className="image" data-title="No">
                          <img
                            src={element.img}
                            alt="#"
                            style={{
                              width: "100px",
                              height: "100px",
                              objectFit: "contain",
                            }}
                          />
                        </td>
                        <td className="product-des" data-title="Description">
                          <p className="product-name">
                            <a href="#">{element.title}</a>
                          </p>
                        </td>
                        <td className="price" data-title="Price">
                          <span>$ {element.price} </span>
                        </td>
                        <td className="qty" data-title="Qty">
                          {/* Input Order */}
                          <div className="input-group">
                            <div className="button minus">
                              <button
                                type="button"
                                className="btn btn-primary btn-number"
                                data-type="minus"
                                data-field="quant[1]"
                                onClick={(e) => handleMinus(e, element)}
                              >
                                <i className="ti-minus" />
                              </button>
                            </div>
                            <input
                              type="text"
                              name="quant[1]"
                              className="input-number"
                              data-min={1}
                              data-max={100}
                              value={element.qty}
                            />
                            <div className="button plus">
                              <button
                                type="button"
                                className="btn btn-primary btn-number"
                                data-type="plus"
                                data-field="quant[1]"
                                onClick={(e) => handlePlus(e, element)}
                              >
                                <i className="ti-plus" />
                              </button>
                            </div>
                          </div>
                          {/*/ End Input Order */}
                        </td>
                        <td className="total-amount" data-title="Total">
                          <span>$ {element.price * element.qty}</span>
                        </td>
                        <td className="action" data-title="Remove">
                          <a
                            href="#"
                            onClick={(e) => handleDeleteCart(element, e)}
                          >
                            <i className="ti-trash remove-icon" />
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              )}
            </table>
            {/*/ End Shopping Summery */}
          </div>
        </div>
        <div className="row">
          <div
            className="col-md-12"
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            {!cart.product ||
              (!cart.product.length > 0 && (
                <h4 className="text-danger text-center">Cart IS Empty :(</h4>
              ))}
          </div>
          <div className="col-12">
            {/* Total Amount */}
            {cart.product && cart.product.length > 0 && (
              <div className="total-amount">
                <div className="row">
                  <div className="col-lg-8 col-md-5 col-12">
                    <div className="left">
                      <div className="coupon">
                        <form action="#" target="_blank">
                          <p>
                            Type <b>PROMO-8</b> to get 8% of{" "}
                          </p>
                          <input
                            name="Coupon"
                            placeholder="Enter Your Promo Code"
                            value={promo}
                            onChange={(e) => setPromo(e.target.value)}
                          />
                          <button
                            type="submit"
                            className="btn"
                            onClick={(e) => handlePromo(e)}
                          >
                            Apply
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-7 col-12">
                    <div className="right">
                      <ul>
                        <li>
                          Cart Subtotal<span>${cart.total}</span>
                        </li>
                        <li>
                          Shipping<span>Free</span>
                        </li>
                        <li>
                          You Save
                          <span>
                            {cart.promo
                              ? "$" +
                                parseFloat(
                                  parseFloat(cart.total) * 0.08
                                ).toFixed(2)
                              : "$0.00"}
                          </span>
                        </li>
                        <li className="last">
                          You Pay
                          <span>
                            $
                            {cart.promo
                              ? parseFloat(
                                  cart.total - parseFloat(cart.total) * 0.08
                                ).toFixed(2)
                              : cart.total}
                          </span>
                        </li>
                      </ul>
                      <div className="button5">
                        <a
                          href="#"
                          className="btn"
                          onClick={(e) => {
                            e.preventDefault();
                            history.push("/checkout");
                          }}
                        >
                          Checkout
                        </a>
                        <a
                          href="#"
                          className="btn"
                          onClick={(e) => handleContinue(e)}
                        >
                          Continue shopping
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/*/ End Total Amount */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
