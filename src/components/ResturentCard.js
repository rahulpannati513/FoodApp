import React from "react";
import { CDN_URL } from "../utils/constants";
import { AiOutlineStar } from 'react-icons/ai';
import { FiClock } from 'react-icons/fi';


const ResturentCard = (props) => {
  
  console.log("entered in resturant card")
  //const resData = resData;

  const {resData} = props;
  console.log(resData);
  const { cloudinaryImageId, name, cuisines, avgRating ,deliveryTime,costForTwo} = resData?.info; 
//data.cards[2].card.card.gridElements.infoWithStyle.restaurants[0].info
  return (

    <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-200 transition-all ">
    <div>
   <img
     className="w-[250px] h-[150px] rounded-lg"
     alt="food-logo"
     src={CDN_URL + cloudinaryImageId}
   />
     <h3 className="font-bold py-4 text-lg">{name}</h3>
     <hr />
     <em>{cuisines.join(', ')}</em>
     <h4 className="avg-rating">
       <span className="icons">
         <AiOutlineStar />
       </span>
       <span>{avgRating} stars</span>
     </h4>
     <h4 className="item-price">
       <span style={{ marginLeft: '4px' }}>₹</span>{' '}
       <span>{costForTwo / 100} FOR TWO</span>
     </h4>
     <h4 className="time">
       <span className="icons">
         <FiClock />
       </span>
       <span> {deliveryTime} minutes</span>
     </h4>
   </div>
 </div>
  
  );
};

 export const withPromotedLabel =(ResturentCard)=>{
  return (props) => {
    return (
      <div>
        <label   className="absolute bg-black  text-white m-2 p-2 rounded-lg">Open</label>
        <ResturentCard {...props}/>
      </div>
    );
  };
};





export default ResturentCard;