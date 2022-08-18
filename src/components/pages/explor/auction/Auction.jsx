import React from "react";
import AuctionWrapper from "./AuctionWrapper";
import Breaccrumb from "../../../common/Breadcrumb";

function Auction() {
  return (
    <>
      <Breaccrumb name="Live Auction" page="Explore" />
      <AuctionWrapper />
    </>
  );
}

export default Auction;
