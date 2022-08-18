import React from 'react'
import CollaborateArea from "./CollaborateArea";
import CtaArea from "./CtaArea";
import DiscoverArea from "./DiscoverArea";
import HeroArea from "./HeroArea";
import LetestBlogArea from "./LetestBlogArea";
import LiveActionArea from "./LiveActionArea";
import SubscribeArea from "./SubscribeArea";
import TopBuyersArea from "./TopBuyersArea";
import TopCreatorsArea from "./TopCreatorsArea";

 

function HomePage() {
  return (
    <>
    <HeroArea />
    <LiveActionArea />
    <TopCreatorsArea />
    <TopBuyersArea />
    <DiscoverArea />
    <CtaArea />
    <LetestBlogArea />
    <CollaborateArea />
    <SubscribeArea />
  </>
  )
}

export default HomePage