import React from "react";
import { Link } from "react-router-dom";

function AuthorBox(props) {
  console.log(props);
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <>
      <div className="single-author-box">
        <div className="author-img-wrap">
          <div className="author-bg">
            <img
              className="w-100"
              src={`${process.env.PUBLIC_URL} ${props.bgImg}`}
              alt="authorIMG"
            />
          </div>
          <div className="author-img text-center">
            <img src={props.authorImg} alt="authorIMG" />
            <div className="author-rank-icon">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/author/creator-rank-icon.png"
                }
                alt="authorIMG"
              />
            </div>
          </div>
        </div>
        <div className="author-content">
          <div className="author-name">
            <ul>
              <li>
                <Link
                  onClick={scrollTop}
                  to={`${process.env.PUBLIC_URL}/author-details`}
                >
                  {props.authorName}
                </Link>
                <span> {props.stock} in stock</span>
              </li>
              <li>
                Digital Paineter <span>4.45 ETH</span>
              </li>
            </ul>
          </div>
          <div className="author-follow-btn text-center">
            <Link
              className="common-btn design-1"
              to={`${process.env.PUBLIC_URL}/author-details`}
              onClick={scrollTop}
            >
              Follow
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthorBox;
