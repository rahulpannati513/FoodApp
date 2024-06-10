import { addItem, removeItem } from '../utils/cartSlice';
import {CDN_URL} from '../utils/constants';
import { useDispatch } from 'react-redux';

const ItemList =({items}) =>{
  console.log("items in ItemList entry : ");
    console.log(items);

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
         //dispatch an action
         dispatch(addItem(item));
    };
    
    const handleRemoveItem = () => {
      //dispatch an action
      dispatch(removeItem());
 };


return(
        <div>
        {items.map((item) => (
          <div
            key={item.card.info.id}
            className="p-2 m-2 border-b-2 text-left flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span>{item.card.info.name}</span>
                <span>
                  - ₹
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 p-4">
              <div className="absolute">
                <button className="p-2 mx-16   rounded-lg bg-black text-white 
                shadow-lg hover:bg-white  hover:text-black transition-all
                 duration-[.3s]"
                 onClick={() => handleAddItem(item)}
                 >
                  Add +
                </button>
                <button className="p-2 mx-16    rounded-lg bg-black text-white 
                shadow-lg hover:bg-white  hover:text-black transition-all
                 duration-[.3s]"
                 onClick={()=>handleRemoveItem()}
                 >
                  remove -
                </button>
              </div>
              <img 
                src={CDN_URL + item.card.info.imageId}
                alt={item.card.info.name}
                className="w-full rounded-md"
              />
            </div>
          </div>
        ))}
      </div>
    );
}

export default ItemList; 