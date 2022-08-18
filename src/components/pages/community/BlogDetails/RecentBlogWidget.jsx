import React from "react";
import { Link } from "react-router-dom";

function RecentBlogWidget() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <>
      <div className="sidebar-wrap">
        <div className="single-sidebar">
          <div className="sidebar-title">
            <h3>Recent Blog</h3>
          </div>
          <div className="recent-post">
            <div className="recent-post-img">
              <img
                src={process.env.PUBLIC_URL + "/images/blog/blog-post-1.png"}
                alt="blogDetailsIMFG"
              />
            </div>
            <div className="recent-post-content">
              <h6>
                <Link
                  onClick={scrollTop}
                  to={`${process.env.PUBLIC_URL}/blog-details`}
                >
                  NFT Trading Surges as Penguins Drive New Boom
                </Link>
              </h6>
              <p>21.09.2021</p>
            </div>
          </div>
          <div className="recent-post">
            <div className="recent-post-img">
              <img
                src={process.env.PUBLIC_URL + "/images/blog/blog-post-2.png"}
                alt="blogDetailsIMFG"
              />
            </div>
            <div className="recent-post-content">
              <h6>
                <Link
                  onClick={scrollTop}
                  to={`${process.env.PUBLIC_URL}/blog-details`}
                >
                  Buy Virtual RealEstate Property In The World
                </Link>
              </h6>
              <p>28.09.2021</p>
            </div>
          </div>
          <div className="recent-post">
            <div className="recent-post-img">
              <img
                src={process.env.PUBLIC_URL + "/images/blog/blog-post-3.png"}
                alt="blogDetailsIMFG"
              />
            </div>
            <div className="recent-post-content">
              <h6>
                <Link
                  onClick={scrollTop}
                  to={`${process.env.PUBLIC_URL}/blog-details`}
                >
                  Experiment with NFT The libraries embeddable
                </Link>
              </h6>
              <p>20.09.2021</p>
            </div>
          </div>
          <div className="recent-post">
            <div className="recent-post-img">
              <img
                src={process.env.PUBLIC_URL + "/images/blog/blog-post-4.png"}
                alt="blogDetailsIMFG"
              />
            </div>
            <div className="recent-post-content">
              <h6>
                <Link
                  onClick={scrollTop}
                  to={`${process.env.PUBLIC_URL}/blog-details`}
                >
                  NFT Trading Surges 8X as Penguins Drive New Boom
                </Link>
              </h6>
              <p>11.10.2021</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecentBlogWidget;
