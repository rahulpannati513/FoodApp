import React, { useEffect, useState } from "react";
import { Shimmer } from "react-shimmer";
import { FaStar } from "react-icons/fa";
import { BsCircleHalf } from "react-icons/bs";
import { MEDIA_ASSETS } from "../utils/constants";
import useResturantMenu from "../utils/useResturantMenu";
function MyComponent() {
  return <FaStar />;
}

const ResturantMenu = () => {

  const resInfo = useResturantMenu(resId);
  
  if (resInfo === null) {
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
  } = resInfo?.cards[0]?.card?.card?.info;
  // const { title } =
  //   data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
  const { itemCards, info } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card.card;

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
              {aggregatedDiscountInfoV2.descriptionList[0].meta}
            </div>
            <div className="coupon_cards">
              {aggregatedDiscountInfoV2.descriptionList[0].meta}
            </div>
            <div className="coupon_cards">
              {aggregatedDiscountInfoV2.descriptionList[0].meta}
            </div>
            <div className="coupon_cards">
              {aggregatedDiscountInfoV2.descriptionList[0].meta}
            </div>
          </div>
        </div>

        <div id="recomended">
          <ul>
            {itemCards.map((item) => (
              <>
                <div id="menu-list">
                  {" "}
                  <div>
                    <h3>{item?.card?.info?.name}</h3>
                    <li>{"₹ " + item?.card?.info?.defaultPrice / 100}</li>
                    <li>{item?.card?.info?.category}</li>
                    <li>{item?.card?.info?.description}</li>
                  </div>
                  <div>
                    <img
                      className="food-icon"
                      src={MEDIA_ASSETS + item?.card?.info?.imageId}
                    ></img>
                  </div>
                </div>
              </>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResturantMenu;
