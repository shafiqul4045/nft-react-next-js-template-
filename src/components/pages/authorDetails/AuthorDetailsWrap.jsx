import React from "react";
import { Link } from "react-router-dom";
import Select from "react-select";

function AuthorDetailsWrap() {
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
      <div className="author-area mt-100">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="title-wrap">
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
          <div className="row mt-50">
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="owner-img-wrap">
                <div className="owner-bg-img">
                  <img
                    className="w-100"
                    src={
                      process.env.PUBLIC_URL +
                      "/images/author/author-details-bg-1.png"
                    }
                    alt="authorDetailsIMG"
                  />
                </div>
                <div className="owner-img text-center">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/author/author-details-owner-1.png"
                    }
                    alt="authorDetailsIMG"
                  />
                </div>
              </div>
              <div className="owner-description-wrap">
                <h3>Saurav Biswash</h3>
                <p>Digital Painter</p>
                <div className="row mt-50">
                  <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="single-owner-description-box">
                      <Link to={"#"}>3 in stock</Link>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="single-owner-description-box">
                      <Link to={"#"}>0.745 ETH</Link>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="single-owner-description-box">
                      <Link to={"#"}>8.2M Followers</Link>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="single-owner-description-box">
                      <Link to={"#"}>4.2K Following</Link>
                    </div>
                  </div>
                </div>
                <div className="owner-description-follow">
                  <Link className="common-btn design-5" to={"#"}>
                    Follow
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 both-small-50">
              <div className="author-title">
                <h1>Saurav’s Collection</h1>
              </div>
              <div className="row g-4 mt-50">
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                  <div className="author-collection-box text-center">
                    <div className="author-collection-img">
                      <img
                        className="w-100"
                        src={
                          process.env.PUBLIC_URL +
                          "/images/author/author-details-img-1.png"
                        }
                        alt="authorDetailsIMG"
                      />
                    </div>
                    <div className="author-collection-content">
                      <div className="author-collection-content-title">
                        <h4>Owl Wildlife Photography</h4>
                      </div>
                      <ul>
                        <li>
                          2.45 ETH
                          <span>
                            845
                            <i className="bx bxs-heart" />
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                  <div className="author-collection-box text-center">
                    <div className="author-collection-img">
                      <img
                        className="w-100"
                        src={
                          process.env.PUBLIC_URL +
                          "/images/author/author-details-img-2.png"
                        }
                        alt="authorDetailsIMG"
                      />
                    </div>
                    <div className="author-collection-content">
                      <div className="author-collection-content-title">
                        <h4>Sailling Ship Vassle</h4>
                      </div>
                      <ul>
                        <li>
                          2.45 ETH
                          <span>
                            845
                            <i className="bx bxs-heart" />
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                  <div className="author-collection-box text-center">
                    <div className="author-collection-img">
                      <img
                        className="w-100"
                        src={
                          process.env.PUBLIC_URL +
                          "/images/author/author-details-img-3.png"
                        }
                        alt="authorDetailsIMG"
                      />
                    </div>
                    <div className="author-collection-content">
                      <div className="author-collection-content-title">
                        <h4>New Born Baby Sleeping</h4>
                      </div>
                      <ul>
                        <li>
                          2.45 ETH
                          <span>
                            845
                            <i className="bx bxs-heart" />
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthorDetailsWrap;
