import React from "react";
import { Link } from "react-router-dom";
import Select from "react-select";

function AuctionSelect() {
  const optionsForSearch = [
    { value: "1", label: "Search by Rating" },
    { value: "2", label: "Search by Price" },
    { value: "3", label: "Search by Date" },
    { value: "4", label: "Recently Added 4" },
    { value: "5", label: "Recently Added 5" },
  ];
  const optionsForAuthor = [
    { value: "1", label: "All Authors 1" },
    { value: "2", label: "All Authors 2" },
    { value: "3", label: "All Authors 3" },
  ];
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
        color: "#fff",
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
      <div className="row ">
        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="title-wrap mb-50">
            <div className="row align-items-center justify-content-lg-between justify-content-md-center justify-content-sm-center justify-content-center">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-8 col-sm-12 col-12">
                <div className="title-category author-page-category">
                  <div className="title-category-btn-wrap">
                    <div className="custom-select Author-select filter-options title-category-select">
                      <Select
                        indicatorSeparator={false}
                        singleValue={false}
                        loadingIndicator={false}
                        styles={customStyles}
                        placeholder="Recently Added"
                        options={optionsForSearch}
                      ></Select>
                    </div>
                    <div className="custom-select Author-select filter-options title-category-select">
                      <Select
                        indicatorSeparator={false}
                        singleValue={false}
                        loadingIndicator={false}
                        styles={customStyles}
                        placeholder="Authors"
                        options={optionsForAuthor}
                      ></Select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-5 col-md-6 col-sm-8 col-10">
                <div className="menu-search-wrap author-page-search-wrap">
                  <form action="#" className="menu-form">
                    <Link to={"#"}>
                      <i className="bx bx-search" />
                    </Link>
                    <input type="text" placeholder="Search Here" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AuctionSelect;
