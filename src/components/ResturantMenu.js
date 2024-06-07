import React, { useEffect, useState } from "react";

import { FaStar } from "react-icons/fa";
import { MEDIA_ASSETS, MENU_API } from "../utils/constants";
import { BsCircleHalf } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { DiVim } from "react-icons/di";

function MyComponent() {
  return <FaStar />;
}

const ResturantMenu = () => {
  const [resInfo, setResInfo] = useState(null); //creating a state variable to store the data AND PASS TO THE RESTUAURANT MENU
  const [isLoading, setIsLoading] = useState(true);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json.data);
    setIsLoading(false);
  };
  console.log(resInfo);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  // if (!resInfo || !resInfo.data) {
  //   return null; // or some fallback UI
  // }

  // const { card } =
  //   resInfo.cards[5].groupedCard.cardGroupMap.REGULAR.cards[2].card;
  // const { locality } = resInfo.cards[2].card.card.info;
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
  const { title } =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
  // const { itemCards, info } =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card.card;
  const { cards } = resInfo;

  console.log(resInfo?.cards[2]?.card?.card?.info);
  return (
    <div id="restuarant_menu_body">
      {" "}
      <div className="res-menu-top-container">
        <div className="res-menu-top-container_left">
          <h3>{name}</h3>
          <p>{cuisines}</p>
          <p>{city}</p>
          <p className="p_2">
            <span>
              <img
                className="icon_size"
                src={MEDIA_ASSETS + feeDetails.icon}
                alt="logo"
              />
            </span>
            {feeDetails.message}
          </p>
        </div>
        <div className="res-menu-top-container_right">
          <FaStar className="star_icon" />

          <p className="res-menu-top-rating">{totalRatingsString}</p>
        </div>
      </div>
      <div className="restuarant_menu-coupons">
        <div>
          <div className="top">
            <p>
              <BsCircleHalf /> {sla.deliveryTime} MINS
            </p>
            <p>{costForTwoMessage}</p>
          </div>
          <div className="coupon_container">
            <div className="coupon_cards">
              {aggregatedDiscountInfoV2?.descriptionList[0]?.meta}
            </div>
            <div className="coupon_cards">
              {aggregatedDiscountInfoV2?.descriptionList[1]?.meta}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResturantMenu;
