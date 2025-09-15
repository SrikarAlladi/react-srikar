import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import Shimmer from "./Shimmer";

const RestaurantMenu = () =>{ 

    const {resId} = useParams(); 

    const resInfo = useRestaurentMenu(resId);
    
    if(resInfo == null) return <Shimmer/>

    const {name,cuisines,avgRating,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

    const itemCards = ((resInfo?.cards[4])?.groupedCard?.cardGroupMap?.REGULAR?.cards[2])?.card?.card?.itemCards;
    console.log(itemCards);

    return(
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ") + "     -    " + costForTwoMessage + "     -      "+avgRating}</p>
            <h2>menu</h2>
            <ul>
                {
                    itemCards.map((item) => (
                        <li key={item?.card?.info?.id}>
                            {item?.card?.info?.name} - {"Rs ."}
                            {item?.card?.info?.price/100}
                        </li>
                    ))
                } 
            </ul>
        </div>
    )
}

export default RestaurantMenu;