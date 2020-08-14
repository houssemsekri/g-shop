import React from "react";
import { useHistory } from "react-router-dom";
function SmallBanner() {
  const history = useHistory();
  const handleClick = (e, id) => {
    e.preventDefault();

    history.push("/single-product?id=" + id);
  };
  return (
    <section className="small-banner section">
      <div className="container-fluid">
        <div className="section-title">
          <h2>Popular Games</h2>
        </div>
        <div className="row">
          {/* Single Banner  */}

          <div className="col-lg-4 col-md-6 col-12">
            <div className="single-banner">
              <img src="images/ghost.jpg" className="banner-img" />
              <div className="content">
                <a
                  href="#"
                  className="btn-2"
                  onClick={(e) =>
                    handleClick(e, "5f2c8919fdfdd634607fae5a&g=true")
                  }
                >
                  More details
                </a>
              </div>
            </div>
          </div>
          {/* /End Single Banner  */}
          {/* Single Banner  */}
          <div className="col-lg-4 col-md-6 col-12">
            <div className="single-banner">
              <img src="images/red.jpg" className="banner-img" />
              <div className="content">
                <a
                  href="#"
                  className="btn-2"
                  onClick={(e) =>
                    handleClick(e, "5f36c61b21ed8d18c8ec37c6&g=true")
                  }
                >
                  More details
                </a>
              </div>
            </div>
          </div>
          {/* /End Single Banner  */}
          {/* Single Banner  */}
          <div className="col-lg-4 col-12">
            <div className="single-banner tab-height">
              <img src="images/god.jpg" alt="#" className="banner-img" />
              <div className="content">
                <a
                  href="#"
                  className="btn-2"
                  onClick={(e) =>
                    handleClick(e, "5f36c52a21ed8d18c8ec37c5&g=true")
                  }
                >
                  More details
                </a>
              </div>
            </div>
          </div>
          {/* /End Single Banner  */}
        </div>
      </div>
    </section>
  );
}

export default SmallBanner;
