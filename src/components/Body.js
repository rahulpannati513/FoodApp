import React from "react";

import resList from "../utils/mockData";
import ResturentCard from "./ResturentCard";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((rahul) => (
          <ResturentCard resData={rahul} />
        ))}
      </div>
    </div>
  );
};

export default Body;
