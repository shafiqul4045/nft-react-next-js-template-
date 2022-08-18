import React from "react";
import { Link } from "react-router-dom";
import SingleBlogCard from "./SingleBlogCard";

function BlogWrapper() {
  return (
    <>
      <div className="blog-area mt-100 ">
        <div className="container">
          <div className="row g-4">
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
              <SingleBlogCard
                image="/images/blog/blog-1.png"
                details="NFT Trading Surges 8X as Penguins Drive New Boom"
                date="20.09.2022"
              />
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
              <SingleBlogCard
                image="/images/blog/blog-2.png"
                details="Investing in Cryptocurrency: Is It Worth the Risk?"
                date="22.09.2022"
              />
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
              <SingleBlogCard
                image="/images/blog/blog-3.png"
                details="Bundesliga Partners With Topps on First-Ever NFT Collection"
                date="23.09.2022"
              />
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
              <SingleBlogCard
                image="/images/blog/blog-4.png"
                details="Experiment with NFT The libraries embeddable"
                date="24.09.2022"
              />
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
              <SingleBlogCard
                image="/images/blog/blog-5.png"
                details="Buy Virtual Real Estate Property Anywhere In The World"
                date="25.09.2022"
              />
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
              <SingleBlogCard
                image="/images/blog/blog-6.png"
                details="Bundesliga Partners With Topps on First-Ever NFT Collection"
                date="25.09.2022"
              />
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
              <SingleBlogCard
                image="/images/blog/blog-7.png"
                details="Bundesliga Partners With Topps on First-Ever NFT Collection"
                date="20.09.2022"
              />
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
              <SingleBlogCard
                image="/images/blog/blog-8.png"
                details="Buy Virtual Real Estate Property Anywhere In The World"
                date="15.09.2022"
              />
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
              <SingleBlogCard
                image="/images/blog/blog-9.png"
                details="NFT Trading Surges 8X as Penguins Drive New Boom"
                date="25.09.2022"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-sm-12 col-12">
              <div className="blog-pagination text-center">
                <ul>
                  <li>
                    <Link to={"#"}>
                      <i className="bx bx-chevron-left" />
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"}>01</Link>
                  </li>
                  <li>
                    <Link to={"#"}>02</Link>
                  </li>
                  <li>
                    <Link to={"#"}>03</Link>
                  </li>
                  <li>
                    <Link to={"#"}>04</Link>
                  </li>
                  <li>
                    <Link to={"#"}>
                      <i className="bx bx-chevron-right" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogWrapper;
