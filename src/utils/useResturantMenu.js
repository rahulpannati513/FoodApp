import { useSearchParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

import { useEffect, useState } from "react";


const useResturantMenu = (resId) => {
//its get the resutrant id now it need to fetdch the dat reutrn the reaurant info rback to wher is using 

//some how fetch the data

const [restInfo,setResInfo] = useState(null);

useEffect(()=>{
    fetchData();
},[])

  const fetchData = async () =>{
    const data = await fetch(MENU_API + resId);
    
    const json = await data.json();
    setResInfo(json.data);

  };
    return restInfo;
};

export default useResturantMenu;