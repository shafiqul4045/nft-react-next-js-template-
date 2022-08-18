import React from "react";
import ArtWorkArea from "./ArtWorkArea";
import BlogArea from "./BlogArea";
import BrandAndSubscribComponent from "./BrandAndSubscribComponent";
import CTA from "./CTA";
import HeroArea from "./HeroArea";
import LiveActionArea from "./Home2LiveAuctionArea";
import Testimonial from "./Testimonial";
import TopContributor from "./TopContributor";

function HomepageTwo() {
  return (
    <>
      <HeroArea />
      <ArtWorkArea />
      <LiveActionArea />
      <TopContributor />
      <CTA />
      <Testimonial />
      <BlogArea />
      <BrandAndSubscribComponent />
    </>
  );
}

export default HomepageTwo;
