import React, { useEffect, useState } from "react";
import { Shimmer } from "react-shimmer";
import { FaStar } from "react-icons/fa";
import { MEDIA_ASSETS } from "../utils/constants";
import { BsCircleHalf } from "react-icons/bs";

function MyComponent() {
  return <FaStar />;
}

const ResturantMenu = () => {
  const [resInfo, setResInfo] = useState(null); //creating a state variable to store the data AND PASS TO THE RESTUAURANT MENU

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId=414835"
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

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

  return (
    <div className="restuarant_menu_body">
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
            <div className="coupon_cards">
              {aggregatedDiscountInfoV2.descriptionList[0].meta}
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default ResturantMenu;
