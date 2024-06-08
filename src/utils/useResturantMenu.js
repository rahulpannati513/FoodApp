import { MENU_API } from "../utils/constants";
import { useEffect, useState } from "react";


const useResturantMenu = (resId) => {
  console.log("entered in useResturantMenu   useeeeeeeee");

  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);


  console.log("using param resId below undi ");
  console.log("resId", resId);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };
 console.log("restInfo in useResturantMenu --00987656789");
 

  // const fetchData1 = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   );
  //   const json = await data.json();
  //   console.log("json in body first json")
  //   console.log(json);
   

  //   //optional chaining - if the value is not present it will not throw error
  //   setListResturent(
  //     json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   //data.cards[2].card.card.gridElements.infoWithStyle.restaurants[0].info
  //   );
  //   console.log("json in body setRestuarent json with depth rotating resturants");

  //   console.log(json?.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  //   setfilteredResturent(
  //     json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants

  //   );
  // };
  


  return resInfo;
};

export default useResturantMenu;