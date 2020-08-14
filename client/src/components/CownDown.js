import React from "react";

function CownDown() {
  return (
    <section className="cown-down">
      <div className="section-inner ">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-12 padding-right">
              <div className="image">
                <img src="images/the.png" alt="#" />
              </div>
            </div>
            <div className="col-lg-6 col-12 padding-left">
              <div className="content">
                <div className="heading-block">
                  <p className="small-title">Deal of the year</p>
                  <h3 className="title">
                    The Witcher 3 game of the year 2015{" "}
                  </h3>
                  <p className="text">
                    The Witcher 3: Wild Hunt is a 2015 action role-playing game
                    developed and published by Polish developer CD Projekt and
                    is based on The Witcher series of fantasy novels by Andrzej.{" "}
                  </p>
                  <h1 className="price">
                    $4.99 <s>$60.99</s>
                  </h1>
                  <div className="coming-time">
                    <div className="clearfix" data-countdown="2021/02/30" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CownDown;
