import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import Data from "../../../data/data";
import PriceRange from "./PriceRange";




// catagory items handle func
const CatagoryBTN = () => {
  const [items, setItems ] = useState(Data);

  const filterItem = (catagoryItem) => {
   console.log(filterItem);
    const updateItems = Data.filter((curentElemet) => {
      return curentElemet.category === catagoryItem;
    });
    setItems(updateItems);
  };
  return (
    <>
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-sm-12 col-12">
          <div className="discover-link text-center">
            <ul>
              <li
                className="filter theme-color"
                onClick={() => setItems(Data)}
              >
                All Categories
              </li>
              <li
                className="filter theme-color"
                onClick={() => filterItem("art")}
              >
                Art
              </li>
              <li
            
                className="filter theme-color"
                onClick={() => filterItem("game")}
              >
                Game
              </li>
              <li
                
                className="filter theme-color"
                onClick={() => filterItem("video")}
              >
                Video
              </li>
              <li
               
                className="filter theme-color"
                onClick={() => filterItem("Photography")}
              >
                Photography
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row mt-50 g-4" id="MixItUpC15DB7">
        {items.map((element) => {
          const { title, image, name, duretion, } = element;

          return (
            <div key={element.id} className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 mix at">
              <div className="discover-box">
                <div className="discover-img-wrap">
                  <img className="w-100"  src={image} alt="DiscoverTitleIMG" />
                  <i className="fas fa-heart" />
                </div>
                <div className="discover-content">
                  <div className="discover-rank">
                    <ul>
                      <li>
                        <Link
                        
                          onClick={() =>
                            window.scrollTo({ top: 0, behavior: "smooth" })
                          }
                          to={`${process.env.PUBLIC_URL}/auction-details`}
                        >
                          {title}
                        </Link>
                        <span>{duretion}</span>
                      </li>
                    </ul>
                  </div>
                  <div className="discover-owner">
                    <ul>
                      <li>
                        <div>
                          <span>Owner:</span> {name}
                        </div>
                        <span className="discover-stock">3 in stock</span>
                      </li>
                    </ul>
                  </div>
                  <div className="discover-btn-wrap">
                    <Link
                      className="common-btn design-4"
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                      to={`${process.env.PUBLIC_URL}/auction-details`}
                    >
                      Place A Bid
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};




function DiscoverArea() {
 const optionsForDestination = [
    { value: "1", label: "Recently Added 1" },
    { value: "2", label: "Recently Added 2" },
    { value: "3", label: "Recently Added 3" },
    { value: "4", label: "Recently Added 4" },
    { value: "5", label: "Recently Added 5" },
  ]
  const optionsForFilter = [
    { value: "1", label: "Price" },
    { value: "2", label: "Times" },
    { value: "3", label: "Date" },
  ]
  const optionsForHIghtoLow =[
    { value: "1", label: "HIgh to low 1" },
    { value: "2", label: "HIgh to low 2" },
    { value: "3", label: "HIgh to low 3" },
  ]
  const optionsForMostLike =  [
    { value: "1", label: "Mostly Liked 1" },
    { value: "2", label: "Mostly Liked 2" },
    { value: "3", label: "Mostly Liked 3" },
  ]
  const optionsForCreator =  [
    { value: "1", label: "Creator 1" },
    { value: "2", label: "Creator 2" },
    { value: "3", label: "Creator 3" },
  ]
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px solid #4c4c4c1c",
      color: state.isSelected ? "#ffae01" : "#273753",
      padding: 5,
      background: "white",
      textAlign: "left",
      cursore: "pointer",
      "&:hover": {
        background: "#1b1b1b",
        color:"#fff"
      },

      singleValue: (provided, state) => {

        return { ...provided };
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
     <div className="discover-area pt-100">
          <div className="container">
            <div className="row">
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="title-wrap">
                  <div className="row align-items-center">
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                      <div className="single-title">
                        <span>
                          <img src={process.env.PUBLIC_URL + "/images/discover/discover-title-icon.png"} alt="DiscoverIMG title" />
                        </span>
                        <h5>Discover</h5>
                      </div>
                    </div>
                    <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                      <div className="title-category text-end">
                        <div className=" title-category-btn-wrap auction-title-category-btn-wrap">
                          <div
                            className="
                            custom-select Creators-select filter-options title-category-select 
                        "
                          >
                            <Select
                              indicatorSeparator={false}
                              singleValue={false}
                              loadingIndicator={false}
                              styles={customStyles}
                              placeholder="Recently Added"
                              options={optionsForDestination}
                            ></Select>
                          </div>
                          <div
                            className="
                          custom-select
                          filter-options
                          title-category-select
                          discover-auction
                        "
                          >
                            <Select
                              loadingIndicator={true}
                              styles={customStyles}
                              placeholder="Filter"
                              options={optionsForFilter}
                            ></Select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-50">
              <div className="col-xl-12 col-lg-12 col-sm-12 col-12">
                <div className="discover-category-wrap">
                  <form action="#">
                    <div className="discover-category-box">
                      <div className="custom-select discover-auction filter-options single-category-box">
                        <label>Price</label>
                        <Select
                          loadingIndicator={true}
                          styles={customStyles}
                          placeholder="HIgh to low"
                          options={ optionsForHIghtoLow}
                        ></Select>
                      </div>
                      <div className="custom-select discover-auction filter-options single-category-box">
                        <label>Like</label>
                        <Select
                          loadingIndicator={true}
                          styles={customStyles}
                          placeholder="Most Like"
                          options={ optionsForMostLike}
                        ></Select>
                      </div>
                      <div className="custom-select discover-auction filter-options single-category-box">
                        <label>Creator</label>
                        <Select
                          loadingIndicator={true}
                          styles={customStyles}
                          placeholder="Creator"
                          options={ optionsForCreator}
                        ></Select>
                      </div>
                      <div className="single-category-box">
                        <label>Price Range</label>
                          <PriceRange width="250" color="#ffae01"/>
                      </div>
                      <div className="clear-all-btn-wrap">
                        <Link className="clear-all-btn" to={"#"}>
                          Clear All <i className="bx bx-x" />
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <CatagoryBTN  />
          </div>
        </div> 
    </>
  )
}

export default DiscoverArea