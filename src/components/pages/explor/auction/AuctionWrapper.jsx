import React from "react";
import { Link } from "react-router-dom";
import DateCountTimer from "../../../common/DateCountTimer";

function AuctionWrapper() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <>
      <div className="live-auction-area pt-100 ">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="title-wrap">
                <div className="row align-items-center">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="single-title">
                      <span>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/images/auction/auction-title-icon.png"
                          }
                          alt="images"
                        />
                      </span>
                      <h5>Live Auction</h5>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="title-category text-end">
                      <div className="title-category-btn-wrap auction-title-category-btn-wrap">
                        <Link
                          onClick={scrollTop}
                          className="common-btn design-3"
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
          <div className="row g-4 pt-50">
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="single-auction-box single-auction-page-box">
                <div className="auction-time text-center">
                  <p>Time Remaining</p>
                  <DateCountTimer/>
                </div>
                <div className="auction-img">
                  <img
                    className="w-100"
                    src={
                      process.env.PUBLIC_URL +
                      "/images/auction/auction-img-1.png"
                    }
                    alt="auctionIMG"
                  />
                </div>
                <div className="auction-content">
                  <Link
                    onClick={scrollTop}
                    to={`${process.env.PUBLIC_URL}/auction-details`}
                  >
                    <h3>Girls &amp; flower portrait natural illustration</h3>
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
                      className="common-btn design-1"
                      to={`${process.env.PUBLIC_URL}/auction-details`}
                    >
                      Place A Bid
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="single-auction-box single-auction-page-box">
                <div className="auction-time text-center">
                  <p>Time Remaining</p>
                  <DateCountTimer/>
                </div>
                <div className="auction-img">
                  <img
                    className="w-100"
                    src={
                      process.env.PUBLIC_URL +
                      "/images/auction/auction-img-2.png"
                    }
                    alt="auctionIMG"
                  />
                </div>
                <div className="auction-content">
                  <Link
                    onClick={scrollTop}
                    to={`${process.env.PUBLIC_URL}/auction-details`}
                  >
                    <h3>Girls &amp; flower portrait natural illustration</h3>
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
                      className="common-btn design-1"
                      to={`${process.env.PUBLIC_URL}/auction-details`}
                    >
                      Place A Bid
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="single-auction-box single-auction-page-box">
                <div className="auction-time text-center">
                  <p>Time Remaining</p>
                  <DateCountTimer/>
                </div>
                <div className="auction-img">
                  <img
                    className="w-100"
                    src={
                      process.env.PUBLIC_URL +
                      "/images/auction/auction-img-3.png"
                    }
                    alt="auctionIMG"
                  />
                </div>
                <div className="auction-content">
                  <Link
                    onClick={scrollTop}
                    to={`${process.env.PUBLIC_URL}/auction-details`}
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
                      className="common-btn design-1"
                      to={`${process.env.PUBLIC_URL}/auction-details`}
                    >
                      Place A Bid
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="single-auction-box single-auction-page-box">
                <div className="auction-time text-center">
                  <p>Time Remaining</p>
                  <DateCountTimer/>
                </div>
                <div className="auction-img">
                  <img
                    className="w-100"
                    src={
                      process.env.PUBLIC_URL +
                      "/images/auction/auction-img-4.png"
                    }
                    alt="auctionIMG"
                  />
                </div>
                <div className="auction-content">
                  <Link
                    onClick={scrollTop}
                    to={`${process.env.PUBLIC_URL}/auction-details`}
                  >
                    <h3>Fish Fantasy digital Illustration with pro-create</h3>
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
                      className="common-btn design-1"
                      to={`${process.env.PUBLIC_URL}/auction-details`}
                    >
                      Place A Bid
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="single-auction-box single-auction-page-box">
                <div className="auction-time text-center">
                  <p>Time Remaining</p>
                  <DateCountTimer/>
                </div>
                <div className="auction-img">
                  <img
                    className="w-100"
                    src={
                      process.env.PUBLIC_URL +
                      "/images/auction/auction-img-5.png"
                    }
                    alt="auctionIMG"
                  />
                </div>
                <div className="auction-content">
                  <Link
                    onClick={scrollTop}
                    to={`${process.env.PUBLIC_URL}/auction-details`}
                  >
                    <h3>Girl with green eyes potrait paintingr</h3>
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
                      className="common-btn design-1"
                      to={`${process.env.PUBLIC_URL}/auction-details`}
                    >
                      Place A Bid
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="single-auction-box single-auction-page-box">
                <div className="auction-time text-center">
                  <p>Time Remaining</p>
                  <DateCountTimer/>
                </div>
                <div className="auction-img">
                  <img
                    className="w-100"
                    src={
                      process.env.PUBLIC_URL +
                      "/images/auction/auction-img-6.png"
                    }
                    alt="auctionIMG"
                  />
                </div>
                <div className="auction-content">
                  <Link
                    onClick={scrollTop}
                    to={`${process.env.PUBLIC_URL}/auction-details`}
                  >
                    <h3>Octopus mascot art vector digital illustration</h3>
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
                      className="common-btn design-1"
                      to={`${process.env.PUBLIC_URL}/auction-details`}
                    >
                      Place A Bid
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="view-more-wrap">
                <Link
                  onClick={scrollTop}
                  className="common-btn design-1"
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

export default AuctionWrapper;
