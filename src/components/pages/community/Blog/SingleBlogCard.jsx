import React from "react";
import { Link } from "react-router-dom";

function SingleBlogCard(props) {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="single-blog-box">
        <div className="blog-img">
          <img className="w-100" src={props.image} alt="blogIMFG" />
        </div>
        <div className="blog-content">
          <h3>
            <Link
              onClick={scrollTop}
              to={`${process.env.PUBLIC_URL}/blog-details`}
            >
              {props.details}
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
              <span>{props.date}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleBlogCard;
