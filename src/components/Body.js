import React, { useEffect } from "react";
import { useState } from "react";
import resList from "../utils/mockData";
import ResturentCard from "./ResturentCard";
import Schimmer from "./Schimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfResurent, setListResturent] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredResturent, setfilteredResturent] = useState([]);

  useEffect(() => {
    fetchData();
    console.log("useEffect Called");
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
   

    //optional chaining - if the value is not present it will not throw error
    setListResturent(
      json?.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    
    );
    console.log(json?.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilteredResturent(
      json?.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  

  // if (listOfResurent.length === 0) {
  //   return <Schimmer />;
  // }

const onlineStatus = useOnlineStatus();

 if(onlineStatus == false) return <h1> Looks like You're offline !! Please check Your internet Connection </h1>


  return listOfResurent.length === 0 ? (
    <Schimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="Search Resturent"
            className="search-btn"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              //search logic here
              const filteredResturent = listOfResurent.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredResturent(filteredResturent);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            //filter logic here

            const filteredList = listOfResurent.filter(
              (res) => res.info.avgRating > 4
            );
            setfilteredResturent(filteredList);
          }}
        >
          Top Rated Resturent
        </button>
      </div>
      <div className="res-container">
        {filteredResturent.map((rahul) => (
          <ResturentCard key={rahul.info.id} resData={rahul} />
        ))}
      </div>
    </div>
  );
};

export default Body;
