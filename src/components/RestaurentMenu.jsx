import { useEffect, useState } from "react";

const RestaurantMenu = () =>{

    const [resInfo,setResInfo] = useState();

    useEffect(() => {
        fetchMenuData();
    },[])

    const fetchMenuData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9485126&lng=77.71476779999999&restaurantId=17303&catalog_qa=undefined&submitAction=ENTER");

        const res = await data.json();

        console.log(res);
        console.log(((res.data.cards[4]).groupedCard.cardGroupMap.REGULAR.cards[2]).card.card.itemCards);
        setResInfo(res?.data);
    }
    

    return(
        <div className="menu">
            <h1>{resInfo?.cards[2]?.card?.card?.info?.name}</h1>
            <h2>menu</h2>
            <ul>
                <li>
                    Biryani
                </li>
                <li>
                    Noodles
                </li>
                <li>
                    Tandoori
                </li>
                <li>
                    Mughulai
                </li> 
            </ul>
        </div>
    )
}

export default RestaurantMenu;