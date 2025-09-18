import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import Shimmer from "./Shimmer";
import  RestaurentCategory from "./RestaurentCategory";
import { useState } from "react";

const RestaurantMenu = () =>{ 

    const {resId} = useParams(); 

    const resInfo = useRestaurentMenu(resId);

    const [showIndex,setShowIndex] = useState();
    
    if(resInfo == null) return <Shimmer/>

    const {name,cuisines,avgRating,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
 
    const itemsFullData = ((resInfo?.cards[4])?.groupedCard?.cardGroupMap?.REGULAR?.cards).filter(c => (c?.card?.card?.["@type"]) == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    console.log("itemsFullData---------->",itemsFullData);

    return(
        <div className="text-center">
            <h1 className="font-bold my-4 text-2xl">{name}</h1>
            <p className="font-bold text-lg my-6">{cuisines.join(", ") + "     -    " + costForTwoMessage + "     -      "+avgRating}</p>
            {itemsFullData.map((category,index) => (
                <RestaurentCategory 
                    key={category.card.card.title} 
                    data={category.card.card} 
                    showItems={index == showIndex }
                    setShowIndex={()=>setShowIndex(index)}
                />
            ))}
        </div>
    )
}

export default RestaurantMenu;