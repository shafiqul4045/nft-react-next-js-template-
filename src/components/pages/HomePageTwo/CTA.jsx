import React from "react";
import { Link } from "react-router-dom";

function CTA() {
  return (
    <>
      <div className="cta-area cta-design-2 secondary-body pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="cta-content cta-content-design-2">
                <h1>Create, Sell &amp; Collect NFTs at NAFLAB</h1>
                <p>
                  Aliquam viverra enim commodo sed consequat tempor <br /> sit
                  nisl cursus lectus.
                </p>
                <div className="cta-btn-wrap">
                  <Link
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="common-btn design-3"
                    to={`${process.env.PUBLIC_URL}/contact`}
                  >
                    Creat Item
                  </Link>
                  <span>
                    <Link
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="common-btn design-3"
                      to={`${process.env.PUBLIC_URL}/discover-auction`}
                    >
                      Discover More
                    </Link>
                  </span>
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 both-small-50 wow animate fadeInRight"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="cta-img-wrap cta-img-wrap-2 text-end">
                <img
                  src={process.env.PUBLIC_URL + "/images/cta-img-2.png"}
                  alt="ctaIMG"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CTA;
