import React from 'react'

import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";
import DateCountTimer from '../../common/DateCountTimer';

function LiveActionArea() {
  const scrollTop = ()=>window.scrollTo({ top: 0, behavior: "smooth" })
  const LiveActionSlide = {
    items: 3,
    loop: true,
    smartSpeed: 1500,
    autoplay: false,
    dots: false,
    margin: 24,
    nav: true,
    navText : ["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>"], 
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
      <div className="live-auction-area pt-100">
          <div className="container">
            <div className="row wow animate fadeIn"
              data-wow-delay="100ms"
              data-wow-duration="1500ms">
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="title-wrap">
                  <div className="row align-items-center">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                      <div className="single-title">
                        <span>
                          <img src={process.env.PUBLIC_URL + "/images/auction/auction-title-icon.png"} alt="AuctionIMG" />
                        </span>
                        <h5>Live Auction</h5>
                      </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                      <div className="title-category text-end">
                        <div className="title-category-btn-wrap">
                          <Link
                            className="common-btn design-3"
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/auction`}
                          >
                            View All
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="row auction-content-wrap pt-50 wow animate fadeIn"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <OwlCarousel
                  {...LiveActionSlide}
                  className="auction-slide-wrap home1 owl-icon-design-1 owl-carousel"
                >
                  <div className="single-auction-box">
                    <div className="auction-time text-center">
                      <p>Time Remaining</p>
                      <DateCountTimer/>
                    </div>
                    <div className="auction-img">
                      <img
                        className="w-100"
                        src={process.env.PUBLIC_URL + "/images/auction/auction-img-1.png"}
                        alt="AuctionIMG"
                      />
                    </div>
                    <div className="auction-content">
                      <Link
                        onClick={scrollTop}
                        to={`${process.env.PUBLIC_URL}/auction`}
                      >
                        <h3>
                          Girls &amp; flower portrait natural illustration
                        </h3>
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
                      <div className="auction-btn-wrap text-center">
                        <Link
                          onClick={scrollTop}
                          className="common-btn design-4"
                          to={`${process.env.PUBLIC_URL}/auction-details`}
                        >
                          Place A Bid
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="single-auction-box">
                    <div className="auction-time text-center">
                      <p>Time Remaining</p>
                      <DateCountTimer/>
                    </div>
                    <div className="auction-img">
                      <img
                        className="w-100"
                        src={process.env.PUBLIC_URL + "/images/auction/auction-img-2.png"}
                        alt="AuctionIMG"
                      />
                    </div>
                    <div className="auction-content">
                      <Link
                        onClick={scrollTop}
                        to={`${process.env.PUBLIC_URL}/auction`}
                      >
                        <h3>
                          Girls &amp; flower portrait natural illustration
                        </h3>
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
                      <div className="auction-btn-wrap text-center">
                        <Link
                          onClick={scrollTop}
                          className="common-btn design-4"
                          to={`${process.env.PUBLIC_URL}/auction-details`}
                        >
                          Place A Bid
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="single-auction-box">
                    <div className="auction-time text-center">
                      <p>Time Remaining</p>
                      <DateCountTimer/>
                    </div>
                    <div className="auction-img">
                      <img
                        className="w-100"
                        src={process.env.PUBLIC_URL + "/images/auction/auction-img-3.png"}
                        alt="AuctionIMG"
                      />
                    </div>
                    <div className="auction-content">
                      <Link
                        onClick={scrollTop}
                        to={`${process.env.PUBLIC_URL}/auction`}
                      >
                        <h3>Man and dog standing on top of planet painting</h3>
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
                      <div className="auction-btn-wrap text-center">
                        <Link
                          onClick={scrollTop}
                          className="common-btn design-4"
                          to={`${process.env.PUBLIC_URL}/auction-details`}
                        >
                          Place A Bid
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="single-auction-box">
                    <div className="auction-time text-center">
                      <p>Time Remaining</p>
                      <DateCountTimer/>
                    </div>
                    <div className="auction-img">
                      <img
                        className="w-100"
                        src={process.env.PUBLIC_URL + "/images/auction/auction-img-4.png"}
                        alt="AuctionIMG"
                      />
                    </div>
                    <div className="auction-content">
                      <Link
                        onClick={scrollTop}
                        to={`${process.env.PUBLIC_URL}/auction`}
                      >
                        <h3>
                          Fish Fantasy digital Illustration with pro-create
                        </h3>
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
                      <div className="auction-btn-wrap text-center">
                        <Link
                          onClick={scrollTop}
                          className="common-btn design-4"
                          to={`${process.env.PUBLIC_URL}/auction-details`}
                        >
                          Place A Bid
                        </Link>
                      </div>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default LiveActionArea