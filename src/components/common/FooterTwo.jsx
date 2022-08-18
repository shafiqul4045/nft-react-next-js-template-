import React, { useEffect } from 'react'
import WOW from "wowjs";
import { Link } from "react-router-dom";


function FooterTwo() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  useEffect(()=>{
    new WOW.WOW({live:false}).init();
  })
  return (
    <>
        <Link to={"#"} id="scroll-top" className="back-to-top-btn back-to-top2">
          <i className="bx bx-chevron-up"></i>
        </Link>
        <div className="footer-area design-2 ">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-sm-12 col-12">
                <div className="footer-wrap">
                  <div className="row justify-content-between">
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                      <div className="single-widget design-2">
                        <div className="footer-logo">
                          <Link to={`${process.env.PUBLIC_URL}/`}>
                            <img src={process.env.PUBLIC_URL + "/images/logo-2.png"} alt="Homepage 2 logo" />
                          </Link>
                          <p>
                            Why I say old chap that is sping lavatory chip shop
                            gosh off his, smashing boot are you taking the piss
                            posh loo brilliant matie boy young.!!
                          </p>
                          <div className="footer-social">
                            <ul>
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
                              <li>
                                <a
                                  rel="noopener noreferrer"
                                  href="https://www.linkedin.com/"
                                  target="_blank"
                                >
                                  <i className="bx bxl-linkedin" />
                                </a>
                              </li>
                              <li>
                                <a
                                  rel="noopener noreferrer"
                                  href="https://www.pinterest.com/"
                                  target="_blank"
                                >
                                  <i className="bx bxl-pinterest" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6">
                      <div className="single-widget design-2">
                        <div className="footer-title">
                          <h4>Usefull Links</h4>
                        </div>
                        <div className="footer-link">
                          <ul>
                            <li>
                              <Link onClick={scrollTop} to={`${process.env.PUBLIC_URL}/auction`}>
                                All NFTs
                              </Link>
                            </li>
                            <li>
                              <Link onClick={scrollTop} to={`${process.env.PUBLIC_URL}/auction-details`}>
                                How It Works
                              </Link>
                            </li>
                            <li>
                              <Link onClick={scrollTop} to={`${process.env.PUBLIC_URL}/login`}>
                                Create
                              </Link>
                            </li>
                            <li>
                              <Link onClick={scrollTop} to={`${process.env.PUBLIC_URL}/discover-auction`}>
                                Explore
                              </Link>
                            </li>
                            <li>
                              <Link onClick={scrollTop} to={`${process.env.PUBLIC_URL}/sign-up`}>
                                Sign Up
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6">
                      <div className="single-widget design-2">
                        <div className="footer-title">
                          <h4>Community</h4>
                        </div>
                        <div className="footer-link">
                          <ul>
                            <li>
                              <Link onClick={scrollTop} to={`${process.env.PUBLIC_URL}/contact`}>
                                Help Center
                              </Link>
                            </li>
                            <li>
                              <Link onClick={scrollTop} to={"#"}>
                                Partners
                              </Link>
                            </li>
                            <li>
                              <Link onClick={scrollTop} to={"#"}>
                                Suggestions
                              </Link>
                            </li>
                            <li>
                              <Link onClick={scrollTop} to={`${process.env.PUBLIC_URL}/blog`}>
                                Blog
                              </Link>
                            </li>
                            <li>
                              <Link onClick={scrollTop} to={"#"}>
                                Newsletter
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12">
                      <div className="single-widget design-2">
                        <div className="footer-title">
                          <h4>Info</h4>
                        </div>
                        <div className="footer-link">
                          <ul>
                            <li>
                              <Link onClick={scrollTop} to={"#"}>
                                FAQ
                              </Link>
                            </li>
                            <li>
                              <Link onClick={scrollTop} to={"#"}>
                                Tracking
                              </Link>
                            </li>
                            <li>
                              <Link onClick={scrollTop} to={"#"}>
                                Privacy Policy
                              </Link>
                            </li>
                            <li>
                              <Link to={"#"}>Terms &amp; Conditions</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="copy-right-area text-center">
                  <p className="copy-text">
                    © 2022 <Link to={`${process.env.PUBLIC_URL}/`} onClick={scrollTop}>NafLab</Link>, All Rights Reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  )
}

export default FooterTwo