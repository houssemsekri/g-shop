import React, { Fragment } from "react";
import Header from "../components/Header";
import SingleProd from "./components/SingleProduct";
import Mid from "../components/Mid";
import CownDown from "../components/CownDown";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Checkoutcom from "./components/Checkoutcom";
function Contact() {
  return (
    <div>
      <Header />
      <section id="contact-us" className="contact-us section">
        <div className="container">
          <div className="contact-head">
            <div className="row">
              <div className="col-lg-8 col-12">
                <div className="form-main">
                  <div className="title">
                    <h4>Get in touch</h4>
                    <h3>Write us a message</h3>
                  </div>
                  <form
                    className="form"
                    method="post"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="row">
                      <div className="col-lg-6 col-12">
                        <div className="form-group">
                          <label>
                            Your Name<span>*</span>
                          </label>
                          <input name="name" type="text" placeholder />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="form-group">
                          <label>
                            Your Subjects<span>*</span>
                          </label>
                          <input name="subject" type="text" placeholder />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="form-group">
                          <label>
                            Your Email<span>*</span>
                          </label>
                          <input name="email" type="email" placeholder />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="form-group">
                          <label>
                            Your Phone<span>*</span>
                          </label>
                          <input name="company_name" type="text" placeholder />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group message">
                          <label>
                            your message<span>*</span>
                          </label>
                          <textarea
                            name="message"
                            placeholder
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group button">
                          <button type="submit" className="btn ">
                            Send Message
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="single-head">
                  <div className="single-info">
                    <i className="fa fa-phone" />
                    <h4 className="title">Call us Now:</h4>
                    <ul>
                      <li>+216 56476529</li>
                      <li>+216 56476529</li>
                    </ul>
                  </div>
                  <div className="single-info">
                    <i className="fa fa-envelope-open" />
                    <h4 className="title">Email:</h4>
                    <ul>
                      <li>
                        <a>sekrihoussem.work@gmail.com</a>
                      </li>
                      <li>
                        <a>sekrihoussem.work@gmail.com</a>
                      </li>
                    </ul>
                  </div>
                  <div className="single-info">
                    <i className="fa fa-location-arrow" />
                    <h4 className="title">Our Address:</h4>
                    <ul>
                      <li>El Menzah 7, Ariana Tunis</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Services />
      <Footer />
    </div>
  );
}

export default Contact;
