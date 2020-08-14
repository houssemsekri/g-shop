import React, { useState, useContext } from "react";
import contry from "./contry";
import { Product } from "../../store/ProductContext";
import { ToastContainer, toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import Axios from "axios";
function Checkoutcom() {
  let history = useHistory();
  const { cart, setcart } = useContext(Product);
  const [state, setstate] = useState({
    name: "",
    lastName: "",
    email: "",
    number: "",
    country: "Tunisia",
    State: "",
    address: "",
    address2: "",
    post: "",
  });
  const handleChange = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value });
  };
  const handleClick = (e) => {
    e.preventDefault();
    const {
      name,
      lastName,
      email,
      number,
      country,
      State,
      address,
      post,
    } = state;
    const poste = {
      ...cart,
      name,
      lastName,
      email,
      number,
      country,
      State,
      address,
      post,
    };
    if (cart.product?.length > 0) {
      Axios.post("/api/order", poste)
        .then((res) => {
          toast(" your order was successful ");
          setTimeout(() => {
            setcart("");
            localStorage.setItem("cartShop", "");
            history.push("/");
          }, 1000);
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div>
      <ToastContainer />
      {/* End Breadcrumbs */}
      {/* Start Checkout */}
      <section className="shop checkout section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12">
              <div className="checkout-form">
                <h2>Make Your Checkout Here</h2>
                <p>Please register in order to checkout more quickly</p>
                {/* Form */}
                <form className="form" onSubmit={handleClick}>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <label>
                          First Name<span>*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          placeholder
                          required="required"
                          onChange={handleChange}
                          value={state.name}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <label>
                          Last Name<span>*</span>
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          placeholder
                          required="required"
                          onChange={handleChange}
                          value={state.lastName}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <label>
                          Email Address<span>*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder
                          required="required"
                          onChange={handleChange}
                          value={state.email}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <label>
                          Phone Number<span>*</span>
                        </label>
                        <input
                          type="number"
                          name="number"
                          placeholder
                          required="required"
                          onChange={handleChange}
                          value={state.number}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <label>
                          Country<span>*</span>
                        </label>
                        <select
                          style={{ display: "block" }}
                          name="country"
                          id="country"
                          onChange={handleChange}
                          value={state.country}
                        >
                          {contry.map((el, i) => {
                            return <option value={el.name}> {el.name} </option>;
                          })}
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <label>
                          State/City<span>*</span>
                        </label>
                        <input
                          type="text"
                          name="State"
                          placeholder
                          required="required"
                          onChange={handleChange}
                          value={state.State}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <label>
                          Address Line 1<span>*</span>
                        </label>
                        <input
                          type="text"
                          name="address"
                          placeholder
                          required="required"
                          onChange={handleChange}
                          value={state.address}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <label>Address Line 2</label>
                        <input
                          type="text"
                          name="address2"
                          placeholder
                          onChange={handleChange}
                          value={state.address2}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <label>
                          Postal Code<span>*</span>
                        </label>
                        <input
                          type="text"
                          name="post"
                          placeholder
                          required="required"
                          onChange={handleChange}
                          value={state.post}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12"></div>
                    <div className="col-12">
                      <div className="form-group create-account">
                        <input id="cbox" type="checkbox" />
                        <label>Create an account?</label>
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    class="btn btn-primary"
                    style={{ marginTop: "50px" }}
                  >
                    {" "}
                    Submit{" "}
                  </button>
                </form>
                {/*/ End Form */}
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="order-details">
                {/* Order Widget */}
                <div className="single-widget">
                  <h2>CART TOTALS</h2>
                  <div className="content">
                    <ul>
                      <li>
                        Sub Total<span>${cart.total}</span>
                      </li>
                      <li>
                        (+) Shipping <span> $15.00</span>
                      </li>
                      <li className="last">
                        Total
                        <span>
                          $ {parseFloat(parseFloat(cart.total) + 15).toFixed(2)}{" "}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                {/*/ End Order Widget */}
                {/* Order Widget */}
                <div className="single-widget">
                  <h2>Payments</h2>
                  <div className="content">
                    <div className="checkbox">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        value="option1"
                        checked
                      />
                      <label class="form-check-label" for="exampleRadios1">
                        Cash On Delivery
                      </label>

                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        value="option1"
                        disabled
                      />
                      <label class="form-check-label" for="exampleRadios1">
                        Check Payments
                      </label>

                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        value="option1"
                        disabled
                      />
                      <label class="form-check-label" for="exampleRadios1">
                        PayPal
                      </label>
                    </div>
                  </div>
                </div>
                {/*/ End Order Widget */}
                {/* Payment Method Widget */}
                <div className="single-widget payement">
                  <div className="content">
                    <img src="images/payment-method.png" alt="#" />
                  </div>
                </div>
                {/*/ End Payment Method Widget */}
                {/* Button Widget */}
                <div className="single-widget get-button">
                  <div className="content">
                    <div className="button">
                      <a href="#" className="btn" onClick={handleClick}>
                        proceed to checkout
                      </a>
                    </div>
                  </div>
                </div>
                {/*/ End Button Widget */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Checkoutcom;
