import React, { useEffect } from "react";
import { useState } from "react";
import resList from "../utils/mockData";
import ResturentCard from "./ResturentCard";
import Schimmer from "./schimmer";
const Body = () => {
  const [listOfResurent, setListResturent] = useState([]);

  useEffect(() => {
    fetchData();
    console.log("useEffect Called");
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    //optional chaining - if the value is not present it will not throw error
    setListResturent(
      json?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  // if (listOfResurent.length === 0) {
  //   return <Schimmer />;
  // }

  return listOfResurent.length === 0 ? (
    <Schimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //filter logic here

            const filteredList = listOfResurent.filter(
              (res) => res.info.avgRating > 4.5
            );
            setListResturent(filteredList);
          }}
        >
          Top Rated Resturent
        </button>
      </div>
      <div className="res-container">
        {listOfResurent.map((rahul) => (
          <ResturentCard key={rahul.info.id} resData={rahul} />
        ))}
      </div>
    </div>
  );
};

export default Body;
