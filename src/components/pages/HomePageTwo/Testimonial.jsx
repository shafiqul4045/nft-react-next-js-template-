import React from "react";
import OwlCarousel from "react-owl-carousel";

function Testimonial() {
  const tesTimonialSlide = {
    items: 1,
    loop: true,
    smartSpeed: 1500,
    autoplay: false,
    dots: true,
    margin: 0,
    // nav: false,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 1,
      },

      768: {
        items: 1,
      },
      992: {
        items: 1,
      },
      1200: {
        items: 1,
      },
      1400: {
        items: 1,
      },
    },
  };
  return (
    <>
      <div className="testimonial-area secondary-body pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="section-title-2 text-center">
                <h1>Testimonial</h1>
              </div>
            </div>
          </div>
          <div className="row mt-50 testimonial-body-wrap align-items-center">
            <div
              className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-lg-block d-none d-sm-none wow animate fadeInLeft"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="testimonial-img">
                <img
                  className="w-100"
                  src={process.env.PUBLIC_URL + "/images/testimonial-img.png"}
                  alt="process.env.PUBLIC_UR "
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="testimonial-content">
                <h1>Hear about our service from our happy users</h1>
                <div className="testimonial-content-box">
                  <OwlCarousel
                    {...tesTimonialSlide}
                    className="testimonial-slide-wrap owl-carousel"
                  >
                    <div className="single-testimonial-slide d-flex ">
                      <div
                        className="testimonial-slide-img"
                        style={{ marginLeft: "10px" }}
                      >
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/images/testimonial-client-img-1.png"
                          }
                          alt="process.env.PUBLIC_URL"
                        />
                      </div>
                      <div className="testimonial-slide-content">
                        <img
                          src={process.env.PUBLIC_URL + "/images/quote.png"}
                          alt="process.env.PUBLIC_URL"
                        />
                        <p>
                          NFT stands for Non-Fungible Token. It is a digital
                          asset and ok what makes it unique from stock photos is
                          the token associated with the asset.
                        </p>
                        <h6>Wrin Howtad</h6>
                        <span>Digital Artist</span>
                      </div>
                    </div>
                    <div className="single-testimonial-slide d-flex ">
                      <div
                        className="testimonial-slide-img"
                        style={{ marginLeft: "10px" }}
                      >
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/images/testimonial-client-img-2.png"
                          }
                          alt="process.env.PUBLIC_UR"
                        />
                      </div>
                      <div className="testimonial-slide-content">
                        <img
                          src={process.env.PUBLIC_URL + "/images/quote.png"}
                          alt="process.env.PUBLIC_URL"
                        />
                        <p>
                          NFT stands for Non-Fungible Token. It is a digital
                          asset and ok what makes it unique from stock photos is
                          the token associated with the asset.
                        </p>
                        <h6>Esther Howard</h6>
                        <span>Business analytics</span>
                      </div>
                    </div>
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
