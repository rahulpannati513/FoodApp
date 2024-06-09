import React, { useState } from "react";
import Shimmer from "./Schimmer";
import useResturantMenu from "../utils/useResturantMenu";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";


const ResturantMenu = () => {


  const { resId } = useParams();
  const resInfo = useResturantMenu(resId);

  if (!resInfo) {
    return <Shimmer />;
  }

  const {
    name,
    cuisines,
    totalRatingsString,
    city,
    feeDetails,
    sla,
    costForTwoMessage,
    aggregatedDiscountInfoV2,
  } = resInfo?.cards[2]?.card?.card?.info;   

  // const {cards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
  console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR);
  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=> c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
 console.log(categories);
  return (
    <>
      <div className="text-center "> 
           <h1 className="font-bold my-6  text-2xl">{name}</h1>
           <p className="font-bold text-lg">  
             {cuisines.join(", ")}-{costForTwoMessage}
           </p>
           {/* categories ni loop cheystam so manaku acordian lo pettachu */}
             {categories.map((category)=>(<RestaurantCategory key={category.card.card.title} data={category.card.card}/>))}
      </div>

   
    </>
  );
}; 

export default ResturantMenu;