import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";

import {addItem} from "../utils/cartSlice";

const ItemList = ({items}) =>{
    console.log("items---------->",items);

    const dispatch = useDispatch();

    const handleAddItem = (item) =>{
        // Dispatch an action 
        dispatch(addItem(item));
    }

    return(
        <div> 
        {items.map((item) => (
            <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                <div>
                    <div className="font-semibold py-2">
                        <span>{item.card.info.name}</span>
                        <span> - ₹ {(item.card.info.price) ? (item.card.info.price)/100 : (item.card.info.defaultPrice)/100}</span>
                    </div>
                    <div className="text-xs">
                        <span>{item.card.info.description}</span>
                    </div>
                </div>
                <div>
                    <button className=" bg-black rounded-md absolute text-white p-1 justify-center cursor-pointer" onClick={() => handleAddItem(item)}>Add +</button>
                    <img src={CDN_URL + item.card.info.imageId} className="w-[100px] h-[100px]" ></img>
                </div>
            </div>
        ))} 
        </div>
    )
}

export default ItemList;