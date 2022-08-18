import React from 'react'
import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";
import Select from "react-select";



function TopCreatorsArea() {
const  optionsForCreator = [
    { value: "1", label: "Last 1 Days" },
    { value: "2", label: "Last 2 Days" },
    { value: "3", label: "Last 3 Days" },
    { value: "4", label: "Last 4 Days" },
    { value: "5", label: "Last 5 Days" },
  ]
  const CreatorSlide = {
    items: 4,
    loop: true,
    smartSpeed: 1500,
    autoplay: false,
    dots: false,
    margin:24,
    nav: true,
    navText : ["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>"], 
    responsive:{
        0:{
            items:1
        },
        480:{
            items:1
        },

        768:{
            items:2
        },
        992:{
            items:3
        },
        1200:{
            items:4
        },
        1400:{
            items:4
        }

    } 
    };

    const customStyles = {
      option: (provided, state) => ({
        ...provided,
        borderBottom: "1px solid #4c4c4c1c",
        color: state.isSelected ? "#ffae01" : "#273753",
        padding: 5,
        background: "#ddd",
        textAlign: "left",
        cursore: "pointer",

        "&:hover": {
          background: "#1b1b1b",
          color:"#fff"
        },

        singleValue: (provided, state) => {
          const opacity = state.isDisabled ? 0.5 : 1;
          const transition = "opacity 300ms";

          return { ...provided, opacity, transition };
        },
      }),
      control: (base, state) => ({
        ...base,
         border: "2px solid #fff",
        boxShadow: "none",
        "&:hover": {
          border: "1px solid #fff",
        },
      }),
    };
    const scrollTop = ()=>window.scrollTo({top:0, behavior:"smooth"})
  return (
    <>
     <div className="top-creators-area pt-100">
          <div className="container">
            <div className="row">
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="title-wrap">
                  <div className="row align-items-center">
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                      <div className="single-title">
                        <span>
                          <img src={process.env.PUBLIC_URL + "/images/creators/creator-title-icon.png"} alt="CreatorTitle" />
                        </span>
                        <h5>Top Creators</h5>
                      </div>
                    </div>
                    <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                      <div className="title-category text-end">
                        <div className="title-category-btn-wrap">
                          <div className="custom-select Creators-select filter-options title-category-select">
                          <Select
                              loadingIndicator={true}
                              styles={customStyles}
                              placeholder="Previous Days"
                              options={optionsForCreator}
                            ></Select>
                          </div>
                          <Link
                            className="common-btn design-3"
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/author`}>
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
              className="row top-creators-wrap pt-50 wow animate fadeIn"
              data-wow-delay="400ms"
              data-wow-duration="1500ms">
              <OwlCarousel {...CreatorSlide} className="creators-slide-wrap owl-icon-design-1 owl-carousel">
                <div className="single-creators-box">
                  <div className="creators-award-count">
                    <div className="trophy-list color-1">
                      <i className="fas fa-trophy" />
                      <span>#1</span>
                    </div>
                    <div className="creators-price">
                      <p>4.45 ETH</p>
                    </div>
                  </div>
                  <div className="creator-img text-center">
                    <img src={process.env.PUBLIC_URL + "/images/creators/creator-img-1.png"} alt="CreatorIMG" />
                    <div className="creator-rank-icon">
                      <img
                        src={process.env.PUBLIC_URL + "/images/creators/creator-rank-icon.png"}
                        alt="CreatorIMG"
                      />
                    </div>
                  </div>
                  <div className="creator-designation">
                    <div className="creator-designation-title">
                      <h5>Zoylin Sisim</h5>
                      <p>Digital Paineter</p>
                    </div>
                    <div className="creator-designation-follower">
                      <Link
                        className="common-btn design-1"
                         onClick={scrollTop}
                        to={`${process.env.PUBLIC_URL}/author-details`}>
                        Follow
                      </Link>
                    </div>
                  </div>
                  <div className="creator-date">
                    <ul>
                      <li>
                        8 August 2021 <span>4 in stock</span>
                      </li>
                    </ul>
                  </div>
                  <div className="creator-description">
                    <Link onClick={scrollTop} to={`${process.env.PUBLIC_URL}/author-details`}>
                      <h6>Man with coffe , confident in his eyes</h6>
                    </Link>
                  </div>
                </div>
                <div className="single-creators-box">
                  <div className="creators-award-count">
                    <div className="trophy-list color-2">
                      <i className="fas fa-trophy" />
                      <span>#2</span>
                    </div>
                    <div className="creators-price">
                      <p>2.45 ETH</p>
                    </div>
                  </div>
                  <div className="creator-img text-center">
                    <img src={process.env.PUBLIC_URL + "/images/creators/creator-img-3.png"} alt="CreatorIMG" />
                    <div className="creator-rank-icon">
                      <img
                        src={process.env.PUBLIC_URL + "/images/creators/creator-rank-icon.png"}
                        alt="CreatorIMG"
                      />
                    </div>
                  </div>
                  <div className="creator-designation">
                    <div className="creator-designation-title">
                      <h5>Saurav. B</h5>
                      <p>Digital Paineter</p>
                    </div>
                    <div className="creator-designation-follower">
                      <Link
                        className="common-btn design-1"
                         onClick={scrollTop}
                        to={`${process.env.PUBLIC_URL}/author-details`}>
                        Follow
                      </Link>
                    </div>
                  </div>
                  <div className="creator-date">
                    <ul>
                      <li>
                        8 August 2021 <span>3 in stock</span>
                      </li>
                    </ul>
                  </div>
                  <div className="creator-description">
                    <Link onClick={scrollTop} to={`${process.env.PUBLIC_URL}/author-details`}>
                      <h6>Girls &amp; flower portrait natural illustration</h6>
                    </Link>
                  </div>
                </div>
                <div className="single-creators-box">
                  <div className="creators-award-count">
                    <div className="trophy-list color-3">
                      <i className="fas fa-trophy" />
                      <span>#3</span>
                    </div>
                    <div className="creators-price">
                      <p>2.45 ETH</p>
                    </div>
                  </div>
                  <div className="creator-img text-center">
                    <img src={process.env.PUBLIC_URL + "/images/creators/creator-img-3.png"} alt="CreatorIMG" />
                    <div className="creator-rank-icon">
                      <img
                        src={process.env.PUBLIC_URL + "/images/creators/creator-rank-icon.png"}
                        alt="CreatorIMG"
                      />
                    </div>
                  </div>
                  <div className="creator-designation">
                    <div className="creator-designation-title">
                      <h5>K. Xenon Dew</h5>
                      <p>Digital Paineter</p>
                    </div>
                    <div className="creator-designation-follower">
                      <Link
                        className="common-btn design-1"
                         onClick={scrollTop}
                        to={`${process.env.PUBLIC_URL}/author-details`}>
                        Follow
                      </Link>
                    </div>
                  </div>
                  <div className="creator-date">
                    <ul>
                      <li>
                        5 August 2021 <span>8 in stock</span>
                      </li>
                    </ul>
                  </div>
                  <div className="creator-description">
                    <Link onClick={scrollTop} to={`${process.env.PUBLIC_URL}/author-details`}>
                      <h6>Care react to the earth digital illustration</h6>
                    </Link>
                  </div>
                </div>
                <div className="single-creators-box">
                  <div className="creators-award-count">
                    <div className="trophy-list color-4">
                      <i className="fas fa-trophy" />
                      <span>#4</span>
                    </div>
                    <div className="creators-price">
                      <p>1.40 ETH</p>
                    </div>
                  </div>
                  <div className="creator-img text-center">
                    <img src={process.env.PUBLIC_URL + "/images/creators/creator-img-4.png"} alt="CreatorIMG" />
                    <div className="creator-rank-icon">
                      <img
                        src={process.env.PUBLIC_URL + "/images/creators/creator-rank-icon.png"}
                        alt="CreatorIMG"
                      />
                    </div>
                  </div>
                  <div className="creator-designation">
                    <div className="creator-designation-title">
                      <h5>Ether Koly</h5>
                      <p>Digital Paineter</p>
                    </div>
                    <div className="creator-designation-follower">
                      <Link
                        className="common-btn design-1"
                         onClick={scrollTop}
                        to={`${process.env.PUBLIC_URL}/author-details`}>
                        Follow
                      </Link>
                    </div>
                  </div>
                  <div className="creator-date">
                    <ul>
                      <li>
                        3 August 2021 <span>1 in stock</span>
                      </li>
                    </ul>
                  </div>
                  <div className="creator-description">
                    <Link onClick={scrollTop} to={`${process.env.PUBLIC_URL}/author-details`}>
                      <h6>Chidrens playing in  illustration</h6>
                    </Link>
                  </div>
                </div>
                <div className="single-creators-box">
                  <div className="creators-award-count">
                    <div className="trophy-list color-2">
                      <i className="fas fa-trophy" />
                      <span>#2</span>
                    </div>
                    <div className="creators-price">
                      <p>2.45 ETH</p>
                    </div>
                  </div>
                  <div className="creator-img text-center">
                    <img src={process.env.PUBLIC_URL + "/images/creators/creator-img-2.png"} alt="CreatorIMG" />
                    <div className="creator-rank-icon">
                      <img
                        src={process.env.PUBLIC_URL + "/images/creators/creator-rank-icon.png"}
                        alt="CreatorIMG"
                      />
                    </div>
                  </div>
                  <div className="creator-designation">
                    <div className="creator-designation-title">
                      <h5>Saurav. B</h5>
                      <p>Digital Paineter</p>
                    </div>
                    <div className="creator-designation-follower">
                      <Link
                        className="common-btn design-1"
                         onClick={scrollTop}
                        to={`${process.env.PUBLIC_URL}/author-details`}>
                        Follow
                      </Link>
                    </div>
                  </div>
                  <div className="creator-date">
                    <ul>
                      <li>
                        8 August 2021 <span>3 in stock</span>
                      </li>
                    </ul>
                  </div>
                  <div className="creator-description">
                    <Link onClick={scrollTop} to={`${process.env.PUBLIC_URL}/author-details`}>
                      <h6>Girls &amp; flower portrait natural illustration</h6>
                    </Link>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
          <img
            className="shape creator-pattarn-right"
            src={process.env.PUBLIC_URL + "/images/creators/creator-pattarn.png"}
            alt="CreatorIMG"
          />
        </div> 
    </>
  )
}

export default TopCreatorsArea