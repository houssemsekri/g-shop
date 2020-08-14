import React, { useState } from "react";
import Slider from "react-slick";
import TrailerModal from "./TrailerModal";
{
  /*  <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
  />*/
}
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="owl-next" onClick={onClick}>
      <i className="ti-angle-right" />
    </div>
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="owl-next modif" onClick={onClick}>
      <i className="ti-angle-left" />
    </div>
  );
}
function Upcoming({ setTrailerModal }) {
  const [url, seturl] = useState();
  const handleClick = (e) => {
    seturl(e.url);
  };

  var settings = {
    autoplay: true,

    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const upCom = [
    {
      img: "images/cyber-1.png",
      img2: "images/cyber.png",
      price: 60,
      title: "Cyber Punk 2077",
      url: "https://www.youtube.com/watch?v=LembwKDo1Dk",
    },
    {
      img: "images/hz-1.png",
      img2: "images/hz.png",
      price: 60,
      title: "Horizon Forbidden West",
      url: "https://www.youtube.com/watch?v=OpfuQulZHR8",
    },
    {
      img: "images/vh.png",
      img2: "images/vh-2.png",
      price: 80,
      title: "Assassin's Creed Valhalla ",
      url: "https://www.youtube.com/watch?v=ssrNcwxALS4",
    },
    {
      img: "images/wt-1.png",
      img2: "images/wt.png",
      price: 65,
      title: "Watch Dogs Leggion",
      url: "https://www.youtube.com/watch?v=k9MDMx4RChA",
    },

    {
      img: "images/p.png",
      img2: "images/p.png",
      price: 70,
      title: "Project Cart 3",
      url: "https://www.youtube.com/watch?v=BsHBiHTXcUA",
    },
  ];
  return (
    <div>
      {url && <TrailerModal url={url} seturl={seturl} />}
      <div className="container">
        <div className="section-title">
          <h2>Upcoming Games</h2>
        </div>
        <div className="row">
          <div className="col-12">
            <Slider {...settings}>
              {upCom.map((e) => {
                return (
                  <div
                    className="owl-item cloned"
                    style={{ width: "285px", marginRight: "0px" }}
                  >
                    {" "}
                    <div className="single-product padding">
                      <div className="product-img">
                        <a
                          href="product-details.html"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img className="default-img" src={e.img} />
                          <img className="hover-img" src={e.img2} alt="#" />
                          <span className="out-of-stock">Hot</span>
                        </a>
                        <div
                          className="button-head"
                          onClick={() => handleClick(e)}
                        >
                          <div className="product-action">
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              title="Quick View"
                              href="#"
                            >
                              <i
                                className=" ti-eye"
                                style={{ paddingRight: "20px" }}
                              />
                              <span> Watch Trailer</span>
                            </a>
                          </div>
                          <div className="product-action-2">
                            <a title="Wishlist" href="#">
                              <span style={{ paddingLeft: "20px" }}>
                                Watch Trailer
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="product-content">
                        <h3>
                          <a href="product-details.html">{e.title}</a>
                        </h3>
                        <div className="product-price">
                          <span className="old">{e.price}.99$</span>
                          <span>{e.price}.99$</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upcoming;
