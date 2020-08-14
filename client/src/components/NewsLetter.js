import React from "react";

function NewsLetter() {
  return (
    <section className="shop-newsletter section">
      <div className="container">
        <div className="inner-top">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-12">
              {/* Start Newsletter Inner */}
              <div className="inner">
                <h4>Newsletter</h4>
                <p>
                  {" "}
                  Subscribe to our newsletter and get <span>10%</span> off your
                  first purchase
                </p>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  method="get"
                  target="_blank"
                  className="newsletter-inner"
                >
                  <input
                    name="EMAIL"
                    placeholder="Your email address"
                    required
                    type="email"
                  />
                  <button type="submit" className="btn">
                    Subscribe
                  </button>
                </form>
              </div>
              {/* End Newsletter Inner */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsLetter;
