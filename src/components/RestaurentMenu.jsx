import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () =>{

    const [resInfo,setResInfo] = useState(); 

    const {resId} = useParams();
    console.log(resId);

    useEffect(() => {
        fetchMenuData();
    },[])

    const fetchMenuData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9485126&lng=77.71476779999999&restaurantId=" +resId+"&catalog_qa=undefined&submitAction=ENTER");

        const res = await data.json();

        console.log(res);
        console.log(((res.data.cards[4]).groupedCard.cardGroupMap.REGULAR.cards[2]).card.card.itemCards); 
        setResInfo(res?.data); 
    }
    
    if(resInfo == null) return <Shimmer/>

    const {name,cuisines,avgRating,cloudinaryImageId,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

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