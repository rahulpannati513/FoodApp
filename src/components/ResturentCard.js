import React from "react";

import { CDN_URL } from "../utils/constants";

const ResturentCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating } = resData.info; //optional chaining - if the value is not present it will not throw error

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-img"
        style={{ width: "100%", height: "200px" }}
        alt="food-logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="res-name">{name}</h3>
      <h4>{cuisines}</h4>
      <h3>⭐️{avgRating} </h3>
    </div>
  );
};

export default ResturentCard;
