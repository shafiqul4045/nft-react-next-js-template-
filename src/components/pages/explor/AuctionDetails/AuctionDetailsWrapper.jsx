import React from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import DateCountTimer from "../../../common/DateCountTimer";

function AuctionDetailsWrapper() {
  const AuctionSlide = {
    items: 3,
    loop: true,
    smartSpeed: 1500,
    autoplay: true,
    dots: false,
    stagePadding: 20,
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
  const scrollTop = () => ({ top: 0, behavior: "smooth" });
  return (
    <>
      <div className="auction-details-area mt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="auction-details-img-wrap">
                <div className="auction-details-img-coming-soon">
                <DateCountTimer/>
                </div>
                <div className="auction-details-img">
                  <img
                    className="w-100"
                    src={process.env.PUBLIC_URL + "/images/auction/auction-details-img-1.png"}
                    alt="auctionDetauilsIMG"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 both-small-50">
              <div className="auction-details-content">
                <h1>
                  Girls &amp; flower portrait natural potrait illustration art
                  #2/5
                </h1>
                <p>
                  The winner of this auction will receive the edition #2/5 copy
                  of "Did you ever really love me?" by Mad Dog Jones. The
                  edition of 1 is shown only for auction purposes.
                </p>
                <div className="auction-details-content-list">
                  <ul>
                    <li>
                      <div>
                        Created By <span>:</span>
                      </div>
                      <span>Sourav Biswash</span>
                    </li>
                    <li>
                      <div>
                        Highest bid <span>:</span>
                      </div>
                      <span>0.238 ETH</span>
                    </li>
                    <li>
                      <div>
                        Image Size <span>:</span>
                      </div>
                      <span>1400px X 1400px</span>
                    </li>
                    <li>
                      <div>
                        Volume <span>:</span>
                      </div>
                      <span>Traded 74.2</span>
                    </li>
                    <li>
                      <div>
                        Started By <span>:</span>
                      </div>
                      <span>@Marvin McKinney</span>
                    </li>
                  </ul>
                </div>
                <div className="auction-details-btn-wrap mt-50">
                  <Link
                    onClick={scrollTop}
                    className="common-btn design-5"
                    to={"#"}
                  >
                    Place A Bid
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="auction-details-similar mt-100 mb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-sm-12 col-12">
              <div className="auction-details-similar-title">
                <h1>Similar Creation You May Like</h1>
              </div>
            </div>
          </div>
          <div className="row pt-50">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <OwlCarousel
                {...AuctionSlide}
                className="auction-slide-wrap owl-icon-design-1 owl-icon-middle owl-carousel"
              >
                <div className="single-auction-box">
                  <div className="auction-time text-center">
                    <p>Time Remaining</p>
                    <DateCountTimer/>
                  </div>
                  <div className="auction-img">
                    <img
                      className="w-100"
                      src={process.env.PUBLIC_URL + "/images/auction/auction-img-4.png"}
                      alt="auctionDetauilsIMG"
                    />
                  </div>
                  <div className="auction-content">
                    <Link
                      onClick={scrollTop}
                      to={`${process.env.PUBLIC_URL}/auction-details`}
                    >
                      <h3>Fish Fantasy digital Illustration with pro</h3>
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
                      src={process.env.PUBLIC_URL + "/images/auction/auction-img-5.png"}
                      alt="auctionDetauilsIMG"
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
                      src={process.env.PUBLIC_URL + "/images/auction/auction-img-6.png"}
                      alt="auctionDetauilsIMG"
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
                      alt="auctionDetauilsIMG"
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
  );
}

export default AuctionDetailsWrapper;
