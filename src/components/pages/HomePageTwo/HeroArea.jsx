import React from "react";
import { Link } from "react-router-dom";

function HeroArea() {
  return (
    <>
      <div className="hero-area-wrap design-2 d-lg-block d-none d-sm-none">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="hero-2-text-content ">
                <h1>
                  NFT is a
                  <span>
                    digital <br /> asset
                  </span>
                  that exists
                </h1>
                <p>
                  “If you are an artist and still don't use NFT (Non-Fungible
                  Token), you are potentially missing millions of dollars.”―
                  Olawale Dan
                </p>
                <div className="hero-2-btn-wrap mt-50">
                  <Link
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="common-btn design-7"
                    to={`${process.env.PUBLIC_URL}/discover-auction`}
                  >
                    Explore
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="hero-image-wrap">
                <div className="hero-img">
                  <img
                    className="w-100"
                    src={process.env.PUBLIC_URL + "/images/hero-img-2.png"}
                    alt="HeroIMG"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="shape hero-cloud"
          src={process.env.PUBLIC_URL + "/images/hero-2-cloud.png"}
          alt="HeroIMG"
        />
        <div className="social-wrap">
          <ul className="hero-social">
            <li className="d-flex justify-content-center">
              <img
                src={process.env.PUBLIC_URL + "/images/arrow.svg"}
                alt="HeroIMG"
              />
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                href="https://www.facebook.com/"
                target="_blank"
              >
                <i className="bx bxl-facebook" />
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                href="https://www.instagram.com/"
                target="_blank"
              >
                <i className="bx bxl-instagram" />
              </a>
            </li>
            <li className="mb-0">
              <a
                rel="noopener noreferrer"
                href="https://www.twitter.com/"
                target="_blank"
              >
                <i className="bx bxl-twitter" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="hero-area-wrap design-2 d-lg-none d-block d-sm-block">
        <div className="container">
          <div className="row ">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="hero-image-wrap">
                <div className="hero-img">
                  <img
                    className="w-100"
                    src={process.env.PUBLIC_URL + "/images/hero-img-2.png"}
                    alt="HeroIMG"
                  />
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 both-small-50">
              <div className="hero-2-text-content ">
                <h1>
                  NFT is a <span>digital asset</span> that exists
                </h1>
                <p>
                  “If you are an artist and still don't use NFT (Non-Fungible
                  Token), you are potentially missing millions of dollars.”―
                  Olawale Dan
                </p>
                <div className="hero-2-btn-wrap mt-50">
                  <Link
                    className="common-btn design-7"
                    to={`${process.env.PUBLIC_URL}/auction`}
                  >
                    Explore
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroArea;
