import React from "react";
import { Link } from "react-router-dom";

function CtaArea() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <>
      <div className="cta-area pt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="cta-area-wrap">
                <div className="row align-items-center">
                  <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="cta-content">
                      <h1>Create, Sell &amp; Collect NFTs at NFTPro</h1>
                      <p>
                        Aliquam viverra enim commodo sed consequat tempor
                        <br />
                        sit nisl cursus lectus.
                      </p>
                      <div
                        className="cta-btn-wrap wow animate flipInX"
                        data-wow-delay="200ms"
                        data-wow-duration="1500ms"
                      >
                        <Link
                          className="common-btn design-3"
                          onClick={scrollTop}
                          to={`${process.env.PUBLIC_URL}/contact`}
                        >
                          Creat Item
                        </Link>
                        <span>
                          <Link
                            className="common-btn design-3"
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/discover-auction`}
                          >
                            Discover More
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 both-small-50 ">
                    <div className="cta-img-wrap text-center">
                      <img
                        className="w-100"
                        src={process.env.PUBLIC_URL + "/images/cta-img.png"}
                        alt="CTAIMG"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CtaArea;
