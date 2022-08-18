import React from 'react'
import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";

function LetestBlogArea() {
  const BlogSlide = {
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
  const scrollTop = ()=>window.scrollTo({ top:0,behavior: "smooth"})
  return (
    <>
     <div className="blog-area pt-100">
          <div className="container">
            <div className="row">
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="title-wrap title-wrap-design-2">
                  <div className="row align-items-center">
                    <div
                      className="
                    col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12
                  "
                    >
                      <div className="single-title">
                        <span>
                          <img src={process.env.PUBLIC_URL + "/images/blog/blog-title-icon.png"} alt="images" />
                        </span>
                        <h5>Latest Blog</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="row mt-50 wow animate fadeIn"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <OwlCarousel
                {...BlogSlide}
                className="blog-slide-wrap owl-icon-design-1 owl-carousel"
              >
                <div className="single-blog-box">
                  <div className="blog-img">
                    <img className="w-100" src={process.env.PUBLIC_URL + "/images/blog/blog-1.png"} alt="BlogIMG" />
                  </div>
                  <div className="blog-content">
                    <h3>
                      <Link onClick={scrollTop} to={`${process.env.PUBLIC_URL}/blog-details`}>
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
                <div className="single-blog-box">
                  <div className="blog-img">
                    <img className="w-100" src={process.env.PUBLIC_URL + "/images/blog/blog-2.png"} alt="BlogIMG" />
                  </div>
                  <div className="blog-content">
                    <h3>
                      <Link onClick={scrollTop} to={`${process.env.PUBLIC_URL}/blog-details`}>
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
                <div className="single-blog-box">
                  <div className="blog-img">
                    <img className="w-100" src={process.env.PUBLIC_URL + "/images/blog/blog-3.png"} alt="BlogIMG" />
                  </div>
                  <div className="blog-content">
                    <h3>
                      <Link onClick={scrollTop} to={`${process.env.PUBLIC_URL}/blog-details`}>
                        Bundesliga Partners With Topps on First-Ever NFT.
                        
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
                <div className="single-blog-box">
                  <div className="blog-img">
                    <img className="w-100" src={process.env.PUBLIC_URL + "/images/blog/blog-2.png"} alt="BlogIMG" />
                  </div>
                  <div className="blog-content">
                    <h3>
                      <Link onClick={scrollTop} to={`${process.env.PUBLIC_URL}/blog-details`}>
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
          </div>
        </div> 
    </>
  )
}

export default LetestBlogArea