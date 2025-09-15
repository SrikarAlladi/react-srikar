import { useEffect, useState } from "react";

const useRestaurentMenu = (resId) => {
    //fetchData
    const [resInfo,setResInfo] = useState(null);
    useEffect(() =>{
        fetchData();
    },[]);    

    const fetchData = async() =>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9485126&lng=77.71476779999999&restaurantId=" +resId+"&catalog_qa=undefined&submitAction=ENTER");

        const res = await data.json();

        console.log(res);
        console.log(((res.data.cards[4]).groupedCard.cardGroupMap.REGULAR.cards[2]).card.card.itemCards); 
        setResInfo(res?.data); 
    }

    return resInfo;
    
}

export default useRestaurentMenu;