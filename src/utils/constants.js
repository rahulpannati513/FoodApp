export const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const LOGO_URL =
  "https://w7.pngwing.com/pngs/126/52/png-transparent-logo-brand-font-food-product-restaurant-logo-design-food-label-text-thumbnail.png";

export const MEDIA_ASSETS = "https://media-assets.swiggy.com/";

export const MENU_API = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId=";

//named export
//import {CDN_URL} from './constants';
//////////////////

// import React, { useEffect, useState } from "react";
// import  Shimmer  from "./Schimmer";
// import { FaStar } from "react-icons/fa";
// import { BsCircleHalf } from "react-icons/bs";
// import { MEDIA_ASSETS } from "../utils/constants";
// import useResturantMenu from "../utils/useResturantMenu";
// import { useParams } from "react-router-dom";


// function MyComponent() {
//   return <FaStar />;
// }

// const ResturantMenu = () => {
//   console.log("entered in resturant menu");

//   const { resId } = useParams();
//   const resInfo = useResturantMenu(resId);

//   console.log("resInfo in resturant menu");
//   console.log(resInfo);

//   if (!resInfo) {
//     return <Shimmer />;
//   }
//   const {//.name
//     name,
//     cuisines,
//     totalRatingsString,
//     city,
//     feeDetails,
//     sla,
//     costForTwoMessage,
//     aggregatedDiscountInfoV2,//cards[2].card.card.info.feeDetails
//   } = resInfo?.cards[2]?.card?.card?.info;
//   // const { title } =
//   //   data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
//    const { itemCards } =
//    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

//   return (
//     <div id="restuarant_menu_body">
//       {" "}
//       <div className="res-menu-top-container">
//         <div className="res-menu-top-container_left">
//           <h3>{name}</h3>
//           <p>{cuisines}</p>
//           <p>{city}</p>
//           <p className="p_2">
//             <span>
//               <img
//                 className="icon_size"
//                 src={MEDIA_ASSETS + feeDetails?.icon}
//                 alt="logo"
//               />
//             </span>
//             <span dangerouslySetInnerHTML={{ __html: feeDetails?.message }}></span>

//           </p>  
//         </div>
//         <div className="res-menu-top-container_right">
//           <FaStar className="star_icon" />

//           <p className="res-menu-top-rating">{totalRatingsString}</p>
//         </div>
//       </div>
//       <div className="restuarant_menu-coupons">
//         <div>
//           <div className="top">
//             <p>
//               <BsCircleHalf /> {sla?.deliveryTime} MINS
//             </p>
//             <p>{costForTwoMessage}</p>
//           </div>
//           <div className="coupon_container">
//             <div className="coupon_cards">
//               {aggregatedDiscountInfoV2?.descriptionList[0]?.meta}
//             </div>
//             <div className="coupon_cards">
//               {aggregatedDiscountInfoV2?.descriptionList[1]?.meta}
//             </div>
//           </div>
//         </div>
//   //map((item, index) => (
//  // <div key={item.card.info.id}></div>

//         <div id="recomended">
//           <ul>
//             {itemCards.map((item,index) => (
//               <>
//                 <div key={item.card.info.id} id="menu-list">
//                   {" "}
//                   <div>
//                     <h3>{item?.card?.info?.name}</h3>
//                     <li>{"₹ " + item?.card?.info?.defaultPrice / 100}</li>
//                     <li>{item?.card?.info?.category}</li>
//                     <li>{item?.card?.info?.description}</li>
//                   </div>
//                   <div>
//                     <img
//                       className="food-icon"
//                       src={MEDIA_ASSETS + item?.card?.info?.imageId}
//                     ></img>
//                   </div>
//                 </div>
//               </>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResturantMenu;






