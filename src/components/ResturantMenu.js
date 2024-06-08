import React, { useState } from "react";
import Shimmer from "./Schimmer";
import useResturantMenu from "../utils/useResturantMenu";
import { useParams } from "react-router-dom";

const ResturantMenu = () => {


  const { resId } = useParams();
  const resInfo = useResturantMenu(resId);

  if (!resInfo) {
    return <Shimmer />;
  }

  // const {
  //   name,
  //   cuisines,
  //   totalRatingsString,
  //   city,
  //   feeDetails,
  //   sla,
  //   costForTwoMessage,
  //   aggregatedDiscountInfoV2,
  // } = resInfo?.cards[2]?.card?.card?.info;

  // const {cards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
  return (
    <>
      <div> 
           <h1> Restuarant Menu</h1>
      </div>

   
    </>
  );
};

export default ResturantMenu;