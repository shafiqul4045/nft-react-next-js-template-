import React from "react";
import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";
import DateCountTimer from "../../common/DateCountTimer";

function Home2LiveAuctionArea() {
  const LiveActionSlide = {
    items: 3,
    loop: true,
    smartSpeed: 1500,
    autoplay: true,
    dots: false,
    margin: 24,
    nav: true,
    navText: [
      "<i class='fas fa-long-arrow-alt-left'></i>",
      "<i class='fas fa-long-arrow-alt-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 1,
      },

      768: {
        items: 2,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 3,
      },
      1400: {
        items: 3,
      },
    },
  };
  return (
    <>
      <div className="live-auction-area-2 secondary-body pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="section-title-2 text-center">
                <h1>Live Auction</h1>
              </div>
            </div>
          </div>
          <div
            className="row pt-50 wow animate fadeIn"
            data-wow-delay="400ms"
            data-wow-duration="1500ms"
          >
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <OwlCarousel
                {...LiveActionSlide}
                className="auction-slide-wrap-design-2 owl-icon-design-2 owl-icon-middle  owl-carousel"
              >
                <div className="single-auction-box auction-box-design-2">
                  <div className="auction-time text-center">
                    <p>Time Remaining</p>
                    <DateCountTimer time = "May 30, 2022, 00:00:00"/>
                  </div>
                  <div className="auction-img">
                    <img
                      className="w-100"
                      src={
                        process.env.PUBLIC_URL +
                        "/images/home-two-auction/auction-img-1.png"
                      }
                      alt="auctionIMG"
                    />
                  </div>
                  <div className="auction-content">
                    <Link to={`${process.env.PUBLIC_URL}/auction-details`}>
                      <h3>Palace of versailles watercolor handdrawn</h3>
                    </Link>
                    <div className="auction-content-price">
                      <div className="auction-current-price">
                        <p>Current Price: 0.782 ETH</p>
                      </div>
                      <div className="auction-love">
                        <span>
                          <i className="bx bxs-heart" />
                        </span>
                        <p>378</p>
                      </div>
                    </div>
                    <div className="auction-btn-wrap ">
                      <Link
                        onClick={() => {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="common-btn design-9"
                        to={`${process.env.PUBLIC_URL}/auction-details`}
                      >
                        Place A Bid
                      </Link>
                    </div>
                  </div>
                </div>
              
                <div className="single-auction-box auction-box-design-2">
                  <div className="auction-time text-center">
                    <p>Time Remaining</p>
                    <DateCountTimer/>
                  </div>
                  <div className="auction-img">
                    <img
                      className="w-100"
                      src={
                        process.env.PUBLIC_URL +
                        "/images/home-two-auction/auction-img-3.png"
                      }
                      alt="auctionIMG"
                    />
                  </div>
                  <div className="auction-content">
                    <Link to={`${process.env.PUBLIC_URL}/auction-details`}>
                      <h3>Vintage summer scenery art with pastle color</h3>
                    </Link>
                    <div className="auction-content-price">
                      <div className="auction-current-price">
                        <p>Current Price: 0.782 ETH</p>
                      </div>
                      <div className="auction-love">
                        <span>
                          <i className="bx bxs-heart" />
                        </span>
                        <p>378</p>
                      </div>
                    </div>
                    <div className="auction-btn-wrap ">
                      <Link
                        className="common-btn design-9"
                        to={`${process.env.PUBLIC_URL}/auction-details`}
                        onClick={() => {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                      >
                        Place A Bid
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="single-auction-box auction-box-design-2">
                  <div className="auction-time text-center">
                    <p>Time Remaining</p>
                   <DateCountTimer/>
                  </div>
                  <div className="auction-img">
                    <img
                      className="w-100"
                      src={
                        process.env.PUBLIC_URL +
                        "/images/home-two-auction/auction-img-2.png"
                      }
                      alt="auctionIMG"
                    />
                  </div>
                  <div className="auction-content">
                    <Link to={`${process.env.PUBLIC_URL}/auction-details`}>
                      <h3>Girls with green eyes potrait painting</h3>
                    </Link>
                    <div className="auction-content-price">
                      <div className="auction-current-price">
                        <p>Current Price: 0.782 ETH</p>
                      </div>
                      <div className="auction-love">
                        <span>
                          <i className="bx bxs-heart" />
                        </span>
                        <p>378</p>
                      </div>
                    </div>
                    <div className="auction-btn-wrap ">
                      <Link
                        className="common-btn design-9"
                        to={`${process.env.PUBLIC_URL}/auction-details`}
                        onClick={() => {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                      >
                        Place A Bid
                      </Link>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
          <div
            className="row wow animate flipInX"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className=" col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="view-more-wrap">
                <Link
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="common-btn design-8"
                  to={`${process.env.PUBLIC_URL}/auction`}
                >
                  View All
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home2LiveAuctionArea;
