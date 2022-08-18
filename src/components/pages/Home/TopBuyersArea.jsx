// carousel

import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";
import Select from "react-select";



function TopBuyersArea() {
  const [selected, setSelected] = useState("");
 const optionsFordate = [
    { value: "1", label: "Today" },
    { value: "2", label: "Tomorrow" },
    { value: "3", label: "Yesterday" }
  ]
  const TopBuyerSlide = {
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
  return (
    <>
      <div className="top-buyer-area pt-100">
          <div className="container">
            <div className="row">
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="title-wrap">
                  <div className="row align-items-center">
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                      <div className="single-title">
                        <span>
                          <img
                            src={process.env.PUBLIC_URL + "/images/top-buyers/buyer-title-icon.png"}
                            alt="TopBuyerBgIMG"
                          />
                        </span>
                        <h5>Top Buyers</h5>
                      </div>
                    </div>
                    <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                      <div className="title-category text-end">
                        <div className="title-category-btn-wrap">
                          <div
                            className="
                          custom-select
                          filter-options
                          title-category-select
                          top-buyer
                        ">
                          <Select
                              loadingIndicator={true}
                              styles={customStyles}
                              placeholder="Buyer"
                              options={optionsFordate}
                              onChange={selected}
                              defaultValue={setSelected}
                            ></Select>
                          </div>
                          <Link
                            className="common-btn design-3"
                            onClick={()=> window.scrollTo({top:0,behavior:"smooth"}) }
                            to={`${process.env.PUBLIC_URL}/auction`}>
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
              className="row pt-50 wow animate fadeIn"
              data-wow-delay="400ms"
              data-wow-duration="1500ms">
              <OwlCarousel {...TopBuyerSlide} className="top-buyer-slide-wrap owl-icon-design-1 owl-carousel">
                <div className="single-top-buyer-box">
                  <div className="top-buyer-top-img-wrap">
                    <img
                      className="w-100"
                      src={process.env.PUBLIC_URL + "/images/top-buyers/top-buyer-bg-img-1.png"}
                      alt="TopBuyerBgIMG"
                    />
                  </div>
                  <div className="top-buyer-content-img-wrap text-center">
                    <div className="top-buyer-content-img">
                      <img
                        src={process.env.PUBLIC_URL + "/images/top-buyers/top-buyer-img-1.png"}
                        alt="TopBuyerBgIMG"
                      />
                      <span>01</span>
                    </div>
                  </div>
                  <div className="top-buyer-content">
                    <div className="top-buyer-name">
                      <ul>
                        <li>
                          Michel Vicky <span>12 winning</span>
                        </li>
                      </ul>
                    </div>
                    <div className="top-buyer-code">
                      <ul>
                        <li>
                          Property Code <span>Bidding Price</span>
                        </li>
                        <li>
                          #tjhd12 <span>1.738 ETH</span>
                        </li>
                      </ul>
                    </div>
                    <div className="top-buyer-follow-btn text-center">
                      <Link className="common-btn design-1" to={"#"}>
                        Follow
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="single-top-buyer-box">
                  <div className="top-buyer-top-img-wrap">
                    <img
                      className="w-100"
                      src={process.env.PUBLIC_URL + "/images/top-buyers/top-buyer-bg-img-2.png"}
                      alt="TopBuyerBgIMG"
                    />
                  </div>
                  <div className="top-buyer-content-img-wrap text-center">
                    <div className="top-buyer-content-img">
                      <img
                        src={process.env.PUBLIC_URL + "/images/top-buyers/top-buyer-img-2.png"}
                        alt="TopBuyerBgIMG"
                      />
                      <span>02</span>
                    </div>
                  </div>
                  <div className="top-buyer-content">
                    <div className="top-buyer-name">
                      <ul>
                        <li>
                          Wade Warren <span>15 winning</span>
                        </li>
                      </ul>
                    </div>
                    <div className="top-buyer-code">
                      <ul>
                        <li>
                          Property Code <span>Bidding Price</span>
                        </li>
                        <li>
                          #tjhd12 <span>3.738 ETH</span>
                        </li>
                      </ul>
                    </div>
                    <div className="top-buyer-follow-btn text-center">
                      <Link className="common-btn design-1" to={"#"}>
                        Follow
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="single-top-buyer-box">
                  <div className="top-buyer-top-img-wrap">
                    <img
                      className="w-100"
                      src={process.env.PUBLIC_URL + "/images/top-buyers/top-buyer-bg-img-3.png"}
                      alt="TopBuyerBgIMG"
                    />
                  </div>
                  <div className="top-buyer-content-img-wrap text-center">
                    <div className="top-buyer-content-img">
                      <img
                        src={process.env.PUBLIC_URL + "/images/top-buyers/top-buyer-img-3.png"}
                        alt="TopBuyerBgIMG"
                      />
                      <span>03</span>
                    </div>
                  </div>
                  <div className="top-buyer-content">
                    <div className="top-buyer-name">
                      <ul>
                        <li>
                          Robert Fox <span>11 winning</span>
                        </li>
                      </ul>
                    </div>
                    <div className="top-buyer-code">
                      <ul>
                        <li>
                          Property Code <span>Bidding Price</span>
                        </li>
                        <li>
                          #tjhd12 <span>1.938 ETH</span>
                        </li>
                      </ul>
                    </div>
                    <div className="top-buyer-follow-btn text-center">
                      <Link className="common-btn design-1" to={"#"}>
                        Follow
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="single-top-buyer-box">
                  <div className="top-buyer-top-img-wrap">
                    <img
                      className="w-100"
                      src={process.env.PUBLIC_URL + "/images/top-buyers/top-buyer-bg-img-4.png"}
                      alt="TopBuyerBgIMG"
                    />
                  </div>
                  <div className="top-buyer-content-img-wrap text-center">
                    <div className="top-buyer-content-img">
                      <img
                        src={process.env.PUBLIC_URL + "/images/top-buyers/top-buyer-img-4.png"}
                        alt="TopBuyerBgIMG"
                      />
                      <span>04</span>
                    </div>
                  </div>
                  <div className="top-buyer-content">
                    <div className="top-buyer-name">
                      <ul>
                        <li>
                          Kathryn Lin <span>14 winning</span>
                        </li>
                      </ul>
                    </div>
                    <div className="top-buyer-code">
                      <ul>
                        <li>
                          Property Code <span>Bidding Price</span>
                        </li>
                        <li>
                          #tjhd12 <span>2.938 ETH</span>
                        </li>
                      </ul>
                    </div>
                    <div className="top-buyer-follow-btn text-center">
                      <Link className="common-btn design-1" to={"#"}>
                        Follow
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="single-top-buyer-box">
                  <div className="top-buyer-top-img-wrap">
                    <img
                      className="w-100"
                      src={process.env.PUBLIC_URL + "/images/top-buyers/top-buyer-bg-img-2.png"}
                      alt="TopBuyerBgIMG"
                    />
                  </div>
                  <div className="top-buyer-content-img-wrap text-center">
                    <div className="top-buyer-content-img">
                      <img
                        src={process.env.PUBLIC_URL + "/images/top-buyers/top-buyer-img-2.png"}
                        alt="TopBuyerBgIMG"
                      />
                      <span>02</span>
                    </div>
                  </div>
                  <div className="top-buyer-content">
                    <div className="top-buyer-name">
                      <ul>
                        <li>
                          Wade Warren <span>15 winning</span>
                        </li>
                      </ul>
                    </div>
                    <div className="top-buyer-code">
                      <ul>
                        <li>
                          Property Code <span>Bidding Price</span>
                        </li>
                        <li>
                          #tjhd12 <span>3.738 ETH</span>
                        </li>
                      </ul>
                    </div>
                    <div className="top-buyer-follow-btn text-center">
                      <Link className="common-btn design-1" to={"#"}>
                        Follow
                      </Link>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
    </>
  )
}

export default TopBuyersArea