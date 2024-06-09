import React, { useEffect } from "react";
import { useState } from "react";
import resList from "../utils/mockData";
import ResturentCard,{withPromotedLabel} from "./ResturentCard";
import Schimmer from "./Schimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfResurent, setListResturent] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredResturent, setfilteredResturent] = useState([]);

  const ResturentCardPromoted = withPromotedLabel(ResturentCard);
// it is a higher order funtion it takes the componenet and return the enhanced version in our case promoted is added

  useEffect(() => {
    fetchData();
    console.log("useEffect Called");
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log("json in body first json")
    console.log(json);
   

    //optional chaining - if the value is not present it will not throw error
    setListResturent(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    //data.cards[2].card.card.gridElements.infoWithStyle.restaurants[0].info
    );
    console.log("json in body setRestuarent json with depth rotating resturants");

    console.log(json?.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilteredResturent(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants

    );
  };
  

  // if (listOfResurent.length === 0) {
  //   return <Schimmer />;
  // }

const onlineStatus = useOnlineStatus();

 if(onlineStatus == false) return <h1> Looks like You're offline !! Please check Your internet Connection </h1>


  return  (
    <div className="body">
    <div className="filter flex-4">
      <div className="search m-4 p-4">
          <input
            type="text"
            placeholder="Search Resturent"
             className="searchBox border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
        className="px-4 py-2 bg-green-100 m-4 rounded-lg"
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
         className="px-4 py-2 bg-gray-100 m-4 rounded-lg"
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

      
      <div className="flex flex-wrap">
        {filteredResturent.map((rahul) => (
          <Link 
          key={rahul.info.id}
          to={`/resturant/${rahul.info.id}`}
          >
          {rahul.info.isOpen ? (<ResturentCardPromoted resData={rahul} /> 
        ):(
        <ResturentCard  resData={rahul} />
        )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
