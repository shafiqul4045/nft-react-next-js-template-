import React from 'react'
import { Link } from "react-router-dom";

function HeroArea() {
  return (
    <>
      <div className="hero-area-wrap hero-area-bg d-lg-block d-none d-sm-none">
          <div className="container">
            <div className="row ">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="hero-text-content">
                  <h1>
                    Discover Unique and
                    <span>
                      incredible
                      <img
                        className="shape hero-text-img"
                        src={process.env.PUBLIC_URL + "/images/hero-text-bg.png"}
                        alt="headerImage"
                      />
                    </span>
                    rare digital art
                  </h1>
                  <p>
                    NafLab is a website taht created for the person who love
                    art. Where people can buy a piece of art and it’s
                    compleately theirs. This system is kinda similar to crypto
                  </p>
                  <div className="hero-btn-wrap mt-50 mb-50">
                    <Link
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="common-btn design-1"
                      to={`${process.env.PUBLIC_URL}/discover-auction`}
                    >
                      Explore
                    </Link>
                    <span>
                      <Link
                        onClick={() => {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="common-btn design-2"
                        to={`${process.env.PUBLIC_URL}/contact`}
                      >
                        Connect Wallet
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="hero-image-wrap">
                  <div className="hero-img">
                    <img src={process.env.PUBLIC_URL + "/images/hero-img.png"} alt="headerImage" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img className="shape hs-1" src={process.env.PUBLIC_URL + "/images/hero-shape-1.png"} alt="headerImage" />
          <img className="shape hs-2" src={process.env.PUBLIC_URL + "/images/hero-shape-2.png"} alt="headerImage" />
          <img className="shape hs-3" src={process.env.PUBLIC_URL + "/images/hero-shape-3.png"} alt="headerImage" />
          <img className="shape hs-4" src={process.env.PUBLIC_URL + "/images/hero-shape-4.png"} alt="headerImage" />
        </div>
        <div className="hero-area-wrap hero-area-bg d-lg-none d-block d-sm-block">
          <div className="container">
            <div className="row ">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="hero-image-wrap text-center">
                  <div className="hero-img">
                    <img src={process.env.PUBLIC_URL + "/images/hero-img.png"} alt="headerImage" />
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 both-small-50">
                <div className="hero-text-content">
                  <h1>
                    Discover Unique and
                    <span>
                      incredible
                      <img
                        className="shape hero-text-img"
                        src={process.env.PUBLIC_URL + "/images/hero-text-bg.png"}
                        alt="headerImage"
                      />
                    </span>
                    rare digital art
                  </h1>
                  <p>
                    NFTPRO is a website taht created for the person who love
                    art. Where people can buy a piece of art and it’s
                    compleately theirs. This system is kinda similar to crypto
                  </p>
                  <div className="hero-btn-wrap mt-50">
                    <Link
                      className="common-btn design-1"
                      to={`${process.env.PUBLIC_URL}/auction`}
                    >
                      Explore
                    </Link>
                    <span>
                      <Link
                        className="common-btn design-2"
                        to={`${process.env.PUBLIC_URL}/contact`}
                      >
                        Connect Wallet
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img className="shape hs-1" src={process.env.PUBLIC_URL + "/images/hero-shape-1.png"} alt="headerImage" />
          <img className="shape hs-2" src={process.env.PUBLIC_URL + "/images/hero-shape-2.png"} alt="headerImage" />
          <img className="shape hs-3" src={process.env.PUBLIC_URL + "/images/hero-shape-3.png"} alt="headerImage" />
          <img className="shape hs-4" src={process.env.PUBLIC_URL + "/images/hero-shape-4.png"} alt="headerImage" />
        </div>
    </>
  )
}

export default HeroArea