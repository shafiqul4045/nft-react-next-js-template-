import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";
import Select from "react-select";

function TopContributor() {
  const [selectedOption, setSelectedOption] = useState("");
  const optionsForTopCreator = [
    { value: "11", label: "Top Creator 1" },
    { value: "21", label: "Top Creator 2" },
    { value: "31", label: "Top Creator 3" },
  ];
  const optionsForRecentDays = [
    { value: "1", label: "Last 7 days" },
    { value: "2", label: "Last 14 days" },
    { value: "3", label: "Last 21 days" },
  ];
  const customStyless = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px solid #4c4c4c1c",
      color: state.isSelected ? "#ffae01" : "#273753",
      padding: 5,
      background: "#ddd",
      textAlign: "left",
      cursore: "pointer",
      "&:hover": {
        background: "#009cea",
        color: "#fff",
      },

      singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = "opacity 300ms";

        return { ...provided, opacity, transition };
      },
    }),
  };
  const creatorSlide = {
    items: 4,
    loop: true,
    smartSpeed: 1500,
    autoplay: false,
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
        items: 3,
      },
      1200: {
        items: 4,
      },
      1400: {
        items: 4,
      },
    },
  };

  return (
    <>
      <div className="top-contributor-area secondary-body pb-100  ">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="section-title-2 text-center">
                <h1>Top Contributor</h1>
              </div>
            </div>
          </div>
          <div
            className="row mt-50 wow animate flipInX "
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="title-category-btn-wrap title-category-design-2">
                <div className="custom-select topCreator-auction filter-options title-category-select title-category-select-design-2">
                  <Select
                    indicatorSeparator={false}
                    singleValue={false}
                    loadingIndicator={false}
                    styles={customStyless}
                    placeholder="Top Creator"
                    onChange={setSelectedOption}
                    defaultInputValue={selectedOption}
                    options={optionsForTopCreator}
                  ></Select>
                </div>
                <div className="custom-select topCreator-auction filter-options title-category-select title-category-select-design-2">
                  <Select
                    indicatorSeparator={false}
                    singleValue={false}
                    loadingIndicator={false}
                    styles={customStyless}
                    placeholder="Recent Days"
                    onChange={setSelectedOption}
                    defaultValue={selectedOption}
                    options={optionsForRecentDays}
                  ></Select>
                </div>
              </div>
            </div>
          </div>
          <div
            className="row pt-50 wow animate fadeIn"
            data-wow-delay="400ms"
            data-wow-duration="1500ms"
          >
            <OwlCarousel
              {...creatorSlide}
              className="creators-slide-wrap-2 owl-icon-design-2 owl-carousel"
            >
              <div className="single-creators-box design-2">
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
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/creators/creator-img-1.png"
                    }
                    alt="CreatorIMG"
                  />
                  <div className="creator-rank-icon">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/images/creators/creator-rank-icon.png"
                      }
                      alt="CreatorIMG"
                    />
                  </div>
                </div>
                <div className="creator-designation">
                  <div className="creator-designation-title">
                    <h5>
                      <Link to={`${process.env.PUBLIC_URL}/author-details`}>
                        Zoylin Sisim
                      </Link>
                    </h5>
                    <p>Digital Paineter</p>
                  </div>
                  <div className="creator-designation-follower">
                    <Link
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="common-btn design-1"
                      to={`${process.env.PUBLIC_URL}/author-details`}
                    >
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
                  <Link to={`${process.env.PUBLIC_URL}/auction-details`}>
                    <h6>Man with coffe , confident in his eyes</h6>
                  </Link>
                </div>
              </div>
              <div className="single-creators-box design-2">
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
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/creators/creator-img-2.png"
                    }
                    alt="CreatorIMG"
                  />
                  <div className="creator-rank-icon">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/images/creators/creator-rank-icon.png"
                      }
                      alt="CreatorIMG"
                    />
                  </div>
                </div>
                <div className="creator-designation">
                  <div className="creator-designation-title">
                    <Link to={`${process.env.PUBLIC_URL}/author-details`}>
                      <h5>Saurav. B</h5>
                    </Link>
                    <p>Digital Paineter</p>
                  </div>
                  <div className="creator-designation-follower">
                    <Link
                      className="common-btn design-1"
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      to={`${process.env.PUBLIC_URL}/author-details`}
                    >
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
                  <Link to={`${process.env.PUBLIC_URL}/auction-details`}>
                    <h6>Girls &amp; flower portrait natural illustration</h6>
                  </Link>
                </div>
              </div>
              <div className="single-creators-box design-2">
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
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/creators/creator-img-3.png"
                    }
                    alt="CreatorIMG"
                  />
                  <div className="creator-rank-icon">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/images/creators/creator-rank-icon.png"
                      }
                      alt="CreatorIMG"
                    />
                  </div>
                </div>
                <div className="creator-designation">
                  <div className="creator-designation-title">
                    <Link to={`${process.env.PUBLIC_URL}/author-details`}>
                      <h5>K. Xenon</h5>
                    </Link>
                    <p>Digital Paineter</p>
                  </div>
                  <div className="creator-designation-follower">
                    <Link
                      className="common-btn design-1"
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      to={`${process.env.PUBLIC_URL}/author-details`}
                    >
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
                  <Link to={`${process.env.PUBLIC_URL}/auction-details`}>
                    <h6>Care to the earth digital illustration</h6>
                  </Link>
                </div>
              </div>
              <div className="single-creators-box design-2">
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
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/creators/creator-img-4.png"
                    }
                    alt="CreatorIMG"
                  />
                  <div className="creator-rank-icon">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/images/creators/creator-rank-icon.png"
                      }
                      alt="CreatorIMG"
                    />
                  </div>
                </div>
                <div className="creator-designation">
                  <div className="creator-designation-title">
                    <Link to={`${process.env.PUBLIC_URL}/author-details`}>
                      <h5>Ether Koly</h5>
                    </Link>
                    <p>Digital Paineter</p>
                  </div>
                  <div className="creator-designation-follower">
                    <Link
                      className="common-btn design-1"
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      to={`${process.env.PUBLIC_URL}/author-details`}
                    >
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
                  <Link to={`${process.env.PUBLIC_URL}/auction-details`}>
                    <h6>Chidrens playing in illustration</h6>
                  </Link>
                </div>
              </div>
              <div className="single-creators-box design-2">
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
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/creators/creator-img-2.png"
                    }
                    alt="CreatorIMG"
                  />
                  <div className="creator-rank-icon">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/images/creators/creator-rank-icon.png"
                      }
                      alt="CreatorIMG"
                    />
                  </div>
                </div>
                <div className="creator-designation">
                  <div className="creator-designation-title">
                    <Link to={`${process.env.PUBLIC_URL}/author-details`}>
                      <h5>Saurav. B</h5>
                    </Link>
                    <p>Digital Paineter</p>
                  </div>
                  <div className="creator-designation-follower">
                    <Link
                      className="common-btn design-1"
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      to={`${process.env.PUBLIC_URL}/author-details`}
                    >
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
                  <Link to={`${process.env.PUBLIC_URL}/auction-details`}>
                    <h6>Girls &amp; flower portrait natural illustration</h6>
                  </Link>
                </div>
              </div>
            </OwlCarousel>
          </div>
          <div
            className="row wow animate flipInX"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className=" col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="view-more-wrap">
                <Link
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "auto" });
                  }}
                  className="common-btn design-8"
                  to={`${process.env.PUBLIC_URL}/author`}
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

export default TopContributor;
