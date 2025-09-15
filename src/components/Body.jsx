
import RestaurentCard from "./RestaurentCard";
import Shimmer from "./Shimmer";
import resList from "../utils/mockData";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Body = () => {
    const [listOfRestaurents,setListOfRestaurents] = useState([]);
    const [filteredRestaurents,setFilteredRestaurents] = useState([]);
    const [searchVal,setSearchVal] = useState([]);

    useEffect(() =>{
        console.log("Use Effect Called");
        fetchData();
    },[])

    const fetchData = async() =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9485126&lng=77.71476779999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json,(json?.data?.cards[1]).card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListOfRestaurents((json?.data?.cards[1]).card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurents((json?.data?.cards[1]).card?.card?.gridElements?.infoWithStyle?.restaurants);
    } 

    const onlineStatus = useOnlineStatus();

    if(onlineStatus == false){
        return <div> User Is Offline...</div>;
    }

    return(
        (filteredRestaurents.length == 0) ? (<Shimmer/>) : (
            <div className="body">
                <div className="flex items-center"> 
                    <div className="search m-4 px-4 py-2">
                        <input 
                            className="border border-solid border-black"
                            type="text"
                            value={searchVal}
                            onChange={(e) => {setSearchVal(e.target.value)}} 
                        >
                        </input>
                        <button
                        className="px-4 py-2 bg-green-100 m-4 rounded-lg cursor-pointer"
                        onClick={() => {
                            const filteredRests = listOfRestaurents.filter(res => res.info.name.toLowerCase().includes(searchVal.toLowerCase()));
                            setFilteredRestaurents(filteredRests);
                        }}>Search</button>
                    </div>
                    <div>
                        <button 
                        className="px-4 py-2 m-4 bg-gray-400 rounded-lg cursor-pointer"
                        onClick={() => { 
                            const filterList = listOfRestaurents.filter((res) => res.info.avgRating > 4.3)
                            console.log(filterList);
                            setFilteredRestaurents(filterList); 
                        }}
                        >
                            Filter Top Rated
                        </button>
                    </div> 
                </div>
                <div className="flex flex-wrap">
                    {
                        filteredRestaurents.map(restaurent =>
                            <Link to={"/restaurent/" + restaurent?.info?.id} key={restaurent?.info?.id}> 
                                <RestaurentCard key={restaurent?.info?.id} resData={restaurent}/>
                            </Link>
                        )
                    } 
                </div>
            </div>
        )
    )
}

export default Body;