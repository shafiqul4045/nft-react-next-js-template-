import React from 'react'
import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";

function BlogArea() {
  const tesTimonialSlide = {
    items: 3,
    loop: true,
    smartSpeed: 1500,
    autoplay: false,
    dots: false,
    margin: 24,
    stagePadding: 15,
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
        items: 2,
      },
      1200: {
        items: 3,
      },
      1400: {
        items: 3,
      },
    },
  };
  return (
    <>
      <div className="blog-area-2 secondary-body pb-100 ">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="section-title-2 text-center mt-10">
                  <h1>Our Blog</h1>
                </div>
              </div>
            </div>
            <div className="row mt-50">
              <OwlCarousel
                {...tesTimonialSlide}
                className=" blog-slide-wrap-2 owl-icon-design-2 owl-icon-middle owl-carousel"
              >
                <div className="single-blog-box design-2">
                  <div className="blog-img">
                    <img className="w-100" src={process.env.PUBLIC_URL + "/images/blog/blog-1.png"} alt="BlogImg" />
                  </div>
                  <div className="blog-content">
                    <h3>
                      <Link to={`${process.env.PUBLIC_URL}/blog-details`}>
                        NFT Trading Surges 8X as Penguins Drive New Boom
                      </Link>
                    </h3>
                    <div className="blog-social-wrap">
                      <ul>
                        <li>
                          <Link to={"#"}>
                            <i className="bx bxs-heart" />
                          </Link>
                        </li>
                        <li>
                          <Link to={"#"}>
                            <i className="bx bx-link-alt" />
                          </Link>
                        </li>
                        <li>
                          <Link to={"#"}>
                            <i className="bx bxs-share-alt" />
                          </Link>
                        </li>
                      </ul>
                      <div className="blog-date">
                        <span>20.09.2021</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-blog-box design-2">
                  <div className="blog-img">
                    <img className="w-100" src={process.env.PUBLIC_URL + "/images/blog/blog-2.png"} alt="BlogImg" />
                  </div>
                  <div className="blog-content">
                    <h3>
                      <Link to={`${process.env.PUBLIC_URL}/blog-details`}>
                        Investing in Cryptocurrency: Is It Worth the Risk?
                      </Link>
                    </h3>
                    <div className="blog-social-wrap">
                      <ul>
                        <li>
                          <Link to={"#"}>
                            <i className="bx bxs-heart" />
                          </Link>
                        </li>
                        <li>
                          <Link to={"#"}>
                            <i className="bx bx-link-alt" />
                          </Link>
                        </li>
                        <li>
                          <Link to={"#"}>
                            <i className="bx bxs-share-alt" />
                          </Link>
                        </li>
                      </ul>
                      <div className="blog-date">
                        <span>20.09.2021</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-blog-box design-2">
                  <div className="blog-img">
                    <img className="w-100" src={process.env.PUBLIC_URL + "/images/blog/blog-3.png"} alt="BlogImg" />
                  </div>
                  <div className="blog-content">
                    <h3>
                      <Link to={`${process.env.PUBLIC_URL}/blog-details`}>
                        Bundesliga Partners With Topps on First-Ever NFT
                        Collection
                      </Link>
                    </h3>
                    <div className="blog-social-wrap">
                      <ul>
                        <li>
                          <Link to={"#"}>
                            <i className="bx bxs-heart" />
                          </Link>
                        </li>
                        <li>
                          <Link to={"#"}>
                            <i className="bx bx-link-alt" />
                          </Link>
                        </li>
                        <li>
                          <Link to={"#"}>
                            <i className="bx bxs-share-alt" />
                          </Link>
                        </li>
                      </ul>
                      <div className="blog-date">
                        <span>20.09.2021</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-blog-box design-2">
                  <div className="blog-img">
                    <img className="w-100" src={process.env.PUBLIC_URL + "/images/blog/blog-2.png"} alt="BlogImg" />
                  </div>
                  <div className="blog-content">
                    <h3>
                      <Link to={`${process.env.PUBLIC_URL}/blog-details`}>
                        Investing in Cryptocurrency: Is It Worth the Risk?
                      </Link>
                    </h3>
                    <div className="blog-social-wrap">
                      <ul>
                        <li>
                          <Link to={"#"}>
                            <i className="bx bxs-heart" />
                          </Link>
                        </li>
                        <li>
                          <Link to={"#"}>
                            <i className="bx bx-link-alt" />
                          </Link>
                        </li>
                        <li>
                          <Link to={"#"}>
                            <i className="bx bxs-share-alt" />
                          </Link>
                        </li>
                      </ul>
                      <div className="blog-date">
                        <span>20.09.2021</span>
                      </div>
                    </div>
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
                    className="common-btn design-8"
                    to={`${process.env.PUBLIC_URL}/blog`}
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    View All
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <img
            className="shape blog-bottom-shape"
            src={process.env.PUBLIC_URL + "/images/blog/blog-two-shape.png"}
            alt="BlogImg"
          />
        </div> 
    </>
  )
}

export default BlogArea