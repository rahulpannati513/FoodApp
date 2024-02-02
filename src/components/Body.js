import React from "react";
import { useState } from "react";
import resList from "../utils/mockData";
import ResturentCard from "./ResturentCard";

const Body = () => {
  const [listOfResurent, setListResturent] = useState(resList);

  //Normal JS Variable
  // let listOfResurentJS = [
  //   {
  //     id: "23596",
  //     name: "Angaara 5",
  //     cloudinaryImageId: "npu9n2pkxsawegspji1h",
  //     locality: "Dargah Road, Nampally",
  //     areaName: "Nampally",
  //     costForTwo: "₹400 for two",
  //     cuisines: ["Tandoor", "Biryani", "Chinese"],
  //     avgRating: 4.1,
  //     parentId: "5039",
  //     avgRatingString: "4.2",
  //     totalRatingsString: "10K+",
  //   },
  //   {
  //     id: "23597",
  //     name: "Bagara Buvva ",
  //     cloudinaryImageId: "npu9n2pkxsawegspji1h",
  //     locality: "Dargah Road, Nampally",
  //     areaName: "Nampally",
  //     costForTwo: "₹400 for two",
  //     cuisines: ["Tandoor", "Biryani", "Chinese"],
  //     avgRating: 3.8,
  //     parentId: "5039",
  //     avgRatingString: "4.8",
  //     totalRatingsString: "10K+",
  //   },
  //   {
  //     id: "23598",
  //     name: "Mandi  ",
  //     cloudinaryImageId: "npu9n2pkxsawegspji1h",
  //     locality: "Narapally Road, Narapally",
  //     areaName: "Nampally",
  //     costForTwo: "₹500 for two",
  //     cuisines: ["Mandi", "Biryani"],
  //     avgRating: 4.8,
  //     parentId: "5039",
  //     avgRatingString: "4.8",
  //     totalRatingsString: "10K+",
  //   },
  // ];
  return (
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
