import React from "react";
import { Link } from "react-router-dom";

function SingleCommentDetails() {
  return (
    <>
      <div className="blog-single-details-content">
        <div className="blog-details-img">
          <img
            className="w-100"
            src={process.env.PUBLIC_URL + "/images/blog/blog-details-img-1.png"}
            alt="blogDetailsIMFG"
          />
          <div className="blog-meta-wrap">
            <div className="single-blog-meta">
              <i className="bx bx-show" />
              <span>21500 View</span>
            </div>
            <div className="single-blog-meta">
              <i className="bx bx-message-detail" />
              <span>7150 Read</span>
            </div>
            <div className="single-blog-meta">
              <i className="bx bx-calendar" />
              <span>29 September 2021</span>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-single-details-content">
        <div className="blog-details-content">
          <h2 className="blog-details-content-head">
            NFT Trading Surges 8X as Penguins Drive New Boom
          </h2>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available. In publishing
            and graphic design, Lorem ipsum is a good efficience placeholder
            text commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content.
          </p>
        </div>
      </div>
      <div className="blog-single-details-content">
        <div className="blog-details-quote">
          <div className="quote-icon">
            <i className="bx bxs-quote-left" />
          </div>
          <div className="quote-content">
            <h3>
              Every time we launch a feature, people yell at us.” — Angelo
              Sotira, co-founder of deviantART
            </h3>
          </div>
        </div>
      </div>
      <div className="blog-single-details-content">
        <div className="blog-middle-img">
          <img
            className="w-100"
            src={process.env.PUBLIC_URL + "/images/blog/blog-details-img-2.png"}
            alt="blogDetailsIMFG"
          />
          <p className="blog-details-second-p">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available. In publishing
            and graphic design, Lorem ipsum is a good efficience placeholder
            text commonly used to demonstrate the visual form of a document or a
            typeface.
          </p>
          <p className="blog-details-second-p">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available.
          </p>
        </div>
      </div>
      <div className="blog-single-details-content">
        <div className="blog-two-img">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <img
                className="w-100"
                src={
                  process.env.PUBLIC_URL + "/images/blog/blog-details-img-3.png"
                }
                alt="blogDetailsIMFG"
              />
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 both-small-24">
              <img
                className="w-100"
                src={
                  process.env.PUBLIC_URL + "/images/blog/blog-details-img-4.png"
                }
                alt="blogDetailsIMFG"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="blog-single-details-content">
        <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available.
        </p>
      </div>
      <div className="blog-single-details-content">
        <div className="blog-details-share">
          <div className="details-share-title">
            <img
              src={
                process.env.PUBLIC_URL + "/images/blog/details-share-icon.png"
              }
              alt="blogDetailsIMFG"
            />
            <span>Share On :</span>
          </div>
          <div className="details-share-social">
            <ul>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/"
                  target="_blank"
                >
                  <i className="bx bxl-facebook" />
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/"
                  target="_blank"
                >
                  <i className="bx bxl-instagram" />
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/"
                  target="_blank"
                >
                  <i className="bx bxl-linkedin" />
                </a>
              </li>
              <li>
                <Link to="#">
                  <i className="bx bxl-blogger" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="blog-single-details-content">
        <div className="blog-details-button-wrap">
          <div className="single-blog-details-button text-center">
            <p>
              <Link to={"#"}>
                <i className="bx bx-chevron-left" /> Previous Post
              </Link>
            </p>
            <h3>Bundesliga Partners With Topps on First-Ever NFT Collection</h3>
          </div>
          <div className="single-blog-details-button text-center">
            <p>
              <Link to={"#"}>
                Next Porst <i className="bx bx-chevron-right" />
              </Link>
            </p>
            <h3>NFT Trading Surges 8X as an Penguins Drive New Boom</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleCommentDetails;
