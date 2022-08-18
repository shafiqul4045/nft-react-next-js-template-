import React, {  useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import PriceRange from "../Home/PriceRange";
import Data from "./catagoryData";

const ArtworkCatagoryFiler = () => {
  const [items, setItems] = useState(Data);
  const filterItem = (catagoryItem) => {
    const updateItems = Data.filter((curentElemet) => {
      return curentElemet.category === catagoryItem;
    });
    setItems(updateItems);
  };
  return (
    <>
      <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
        <div className="discover-link discover-link-design-2">
          <ul>
            <li
              className="filter theme-color"
              onClick={() => setItems(Data)}
              data-filter="all"
            >
              All Categories
            </li>
            <li
              className="filter theme-color "
              onClick={() => filterItem("art")}
              data-filter=".at"
            >
              Art
            </li>
            <li
              className="filter theme-color"
              onClick={() => filterItem("game")}
              data-filter=".gm"
            >
              Game
            </li>
            <li
              className="filter theme-color"
              onClick={() => filterItem("video")}
              data-filter=".vd"
            >
              Video
            </li>
            <li
              className="filter theme-color"
              onClick={() => filterItem("Photography")}
              data-filter=".pt"
            >
              Photography
            </li>
          </ul>
        </div>
        <div className="row g-4">
          {items.map((element) => {
            const { title, listBy, price, time, img } = element;

            return (
              <div key={element.id} className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 mix at">
                <div  className="single-artworks-box">
                  <div className="artworks-img-wrap">
                    <img  src={img} alt="ArtIMG" />
                  </div>
                  <div className="artworks-content-wrap">
                    <h6>
                      <Link  to={`${process.env.PUBLIC_URL}/auction-details`}>
                        {title}
                      </Link>
                    </h6>
                    <ul>
                      <li>
                        Listed by
                        <span className="color-1" >{listBy}</span>
                      </li>
                      <li>
                        Asking Price:
                        <span className="color-2" >{price}</span>
                      </li>
                      <li>
                        Publised:
                        <span className="color-3" >{time}</span>
                      </li>
                    </ul>
                    <div className="artworks-button">
                      <Link
                      onClick={()=>{window.scrollTo({top:0, behavior:"smooth"})}}
                        className="common-btn design-9"
                        to={`${process.env.PUBLIC_URL}/auction-details`}
                      >

                        Place a Bid
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};




function ArtWorkArea() {
  const [selected, setSelected] = useState("");
  const optionsForDestination = [
    { value: "2", label: "Art" },
    { value: "3", label: "Game" },
    { value: "4", label: "Video" },
    { value: "5", label: "Photography" },
  ]
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px solid #4c4c4c1c",
      color: state.isSelected ? "#ffae01" : "#273753",
      padding: 5,
      background: "#ddd",
      textAlign: "center",
      cursore: "pointer",
      "&:hover": {
        background: "#009cea",
      },

      singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = "opacity 300ms";

        return { ...provided, opacity, transition };
      },
    }),
  };
  return (
    <>
      <div className="artwork-area secondary-body pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="section-title-2 text-center">
                  <h1>Explore Artworks</h1>
                </div>
              </div>
            </div>
            <div
              className="row mt-50 wow animate fadeIn"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div
                className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 wow animate fadeInLeft"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="artworks-category-wrap">
                  <div className="single-artworks-category">
                    <div className="menu-search-wrap design-2">
                      <form action="#" className="menu-form wow animate flipInX"  data-wow-delay="400ms"
              data-wow-duration="1500ms">
                        <Link to={"#"}>
                          <i className="bx bx-search" />
                        </Link>
                        <div className="">
                        <Select
                              indicatorSeparator={false}
                              singleValue={false}
                              loadingIndicator={false}
                              styles={customStyles}
                              placeholder="Search By Categories"
                              options={optionsForDestination}
                              onChange={setSelected}
                              defaultValue={selected}
                            ></Select>
                        </div>
                      
                      </form>
                    </div>
                  </div>
                  <div className="single-artworks-category">
                    <label className="label-category">Price Range</label>
                    <PriceRange color="#009cea"/>
                    <div className="artworks-price-wrap">
                      <div className="home2-price-range-slider">
                      </div>
                    </div>
                  </div>
                  <div className="single-artworks-category">
                    <label className="label-category">Price</label>
                    <div className="range-category-wrap">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault1"
                        >
                          High to low
                        </label>
                      </div>
                      <div className="form-check ">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault2"
                        >
                          Low to High
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="single-artworks-category">
                    <label className="label-category">Like</label>
                    <div className="range-category-wrap">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault1"
                          id="flexRadioDefault3"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault3"
                        >
                          Most Liked
                        </label>
                      </div>
                      <div className="form-check ">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault1"
                          id="flexRadioDefault4"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault4"
                        >
                          Less Liked
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="single-artworks-category">
                    <label className="label-category">Creator</label>
                    <div className="range-category-wrap">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault2"
                          id="flexRadioDefault5"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault5"
                        >
                          Only Verified
                        </label>
                      </div>
                      <div className="form-check ">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault2"
                          id="flexRadioDefault6"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault6"
                        >
                          All Creators
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <ArtworkCatagoryFiler />
            </div>
            <div
              className="row wow animate flipInX"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className=" col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="view-more-wrap">
                  <Link
                  onClick={()=>{window.scrollTo({top:0, behavior:"smooth"})}}
                    className="common-btn design-8"
                    to={`${process.env.PUBLIC_URL}/auction`}
                  >
                    View All
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <img className="shape artwork-bg" src={process.env.PUBLIC_URL + "/images/artworks/art-bg.png"} alt="ArtIMG" />
        </div>
    </>
  )
}

export default ArtWorkArea