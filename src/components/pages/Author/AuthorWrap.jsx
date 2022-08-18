import React from "react";
import { Link } from "react-router-dom";
import AuctionSelect from "./AuctionSelect";
import AuthorBox from "./AuthorBox";

function AuthorWrap() {
  return (
    <>
      <div className="author-area mt-100">
        <div className="container">
          <AuctionSelect />
          <div className="row g-4">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
              <AuthorBox
                bgImg="/images/author/author-bg-1.png"
                authorImg="/images/author/creator-img-1.png"
                authorName="Zoylin Sisim"
                stock="4"
              />
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
              <AuthorBox
                bgImg="/images/author/author-bg-2.png"
                authorImg="/images/author/creator-img-2.png"
                authorName="Susant S."
                stock="2"
              />
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
              <AuthorBox
                bgImg="/images/author/author-bg-3.png"
                authorImg="/images/author/creator-img-3.png"
                authorName=""
                stock="3"
              />
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
              <AuthorBox
                bgImg="/images/author/author-bg-4.png"
                authorImg="/images/author/creator-img-4.png"
                authorName="Ether Koly"
                stock="1"
              />
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
              <AuthorBox
                bgImg="/images/author/author-bg-5.png"
                authorImg="/images/author/creator-img-1.png"
                authorName="Xenon Dew"
                stock="2"
              />
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
              <AuthorBox
                bgImg="/images/author/author-bg-6.png"
                authorImg="/images/author/creator-img-2.png"
                authorName="Susant S"
                stock="3"
              />
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
              <AuthorBox
                bgImg="/images/author/author-bg-7.png"
                authorImg="/images/author/creator-img-3.png"
                authorName="Xenon Dew"
                stock="3"
              />
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
              <AuthorBox
                bgImg="/images/author/author-bg-8.png"
                authorImg="/images/author/creator-img-4.png"
                authorName="Zoylin Sisim"
                stock="4"
              />
            </div>
            <div className="author-follow-btn text-center">
              <Link
                className="common-btn design-1"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to={`${process.env.PUBLIC_URL}/auction-details`}
              >
                Follow
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthorWrap;
