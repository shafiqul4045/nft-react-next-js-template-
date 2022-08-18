import React from "react";

function BrandAndSubscribComponent() {
  return (
    <>
      <div className="partner-area secondary-body pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="section-title-2 text-center">
                <h1>Our Partner</h1>
              </div>
            </div>
          </div>
          <div className="row g-3 justify-content-center mt-50">
            <div
              className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 wow animate fadeInUp"
              data-wow-delay="100ms"
              data-wow-duration="1500ms"
            >
              <div className="partner-single-box">
                <img
                  src={process.env.PUBLIC_URL + "/images/partner/partner-1.png"}
                  alt="Partner"
                />
              </div>
            </div>
            <div
              className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 wow animate fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="partner-single-box">
                <img
                  src={process.env.PUBLIC_URL + "/images/partner/partner-2.png"}
                  alt="Partner"
                />
              </div>
            </div>
            <div
              className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 wow animate fadeInUp"
              data-wow-delay="300ms"
              data-wow-duration="1500ms"
            >
              <div className="partner-single-box">
                <img
                  src={process.env.PUBLIC_URL + "/images/partner/partner-3.png"}
                  alt="Partner"
                />
              </div>
            </div>
            <div
              className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 wow animate fadeInUp"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="partner-single-box">
                <img
                  src={process.env.PUBLIC_URL + "/images/partner/partner-4.png"}
                  alt="Partner"
                />
              </div>
            </div>
            <div
              className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 wow animate fadeInUp"
              data-wow-delay="500ms"
              data-wow-duration="1500ms"
            >
              <div className="partner-single-box">
                <img
                  src={process.env.PUBLIC_URL + "/images/partner/partner-5.png"}
                  alt="Partner"
                />
              </div>
            </div>
            <div
              className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 wow animate fadeInUp"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="partner-single-box">
                <img
                  src={process.env.PUBLIC_URL + "/images/partner/partner-6.png"}
                  alt="Partner"
                />
              </div>
            </div>
          </div>
        </div>
        <img
          className="shape partner-shape-middle"
          src={process.env.PUBLIC_URL + "/images/partner/partner-shape.png"}
          alt="Partner"
        />
      </div>
      <div className="subscribe-area subscribe-area-2 secondary-body pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10 col-md-12 col-sm-12 col-12">
              <div className="subscribe-content design-2 text-center">
                <div className="section-title-2 text-center">
                  <h1>Get It In A Unique Rare Digital Art</h1>
                </div>
                <p>
                  Let’s start looking for something unique and limited art. Have
                  it <br /> the only one in the world.
                </p>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="subscribe-form mt-50 wow animate flipInX"
                  data-wow-delay="400ms"
                  data-wow-duration="1500ms"
                >
                  <input type="text" placeholder="Enter your email here" />
                  <button>Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <img
          className="shape subscribe-shape"
          src={process.env.PUBLIC_URL + "/images/subscribe-shape-2.png"}
          alt="subscribeIMG"
        />
      </div>
    </>
  );
}

export default BrandAndSubscribComponent;
