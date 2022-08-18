import React from "react";
import AuctionDetailsWrapper from "./AuctionDetailsWrapper";
import Breaccrumb from "../../../common/Breadcrumb";

function AuctionDetails() {
  return (
    <>
    <Breaccrumb page= "Explore" name="Auction Details" />
    <AuctionDetailsWrapper />
  </>
  )
}

export default AuctionDetails