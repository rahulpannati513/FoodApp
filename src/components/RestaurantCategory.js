import ItemList from "./ItemList";
import {useState} from 'react';
const RestaurantCategory =({data}) =>{

    const[showItems, setShowItems] = useState(false);

    const handleClick = () => {
       setShowItems(!showItems); //if showItems is true then it will be false and vice versa
    }

    console.log("itemns mentu chudu ra babu");
    console.log(data);
    return(
    <div>
        {/* header  */}
        <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4 ">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
            <span className=" font-bold text-lg">{data.title}({data.itemCards.length})   </span>
            <span>⬇️</span>
        </div>
         
       { showItems && <ItemList items={data.itemCards}/>}
        </div>

        {/* Accordion body */}
       
    </div>
    );
}

export default RestaurantCategory;