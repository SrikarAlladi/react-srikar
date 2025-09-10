
import RestaurentCard from "./RestaurentCard";
import Shimmer from "./Shimmer";
import resList from "../utils/mockData"
import { useEffect, useState } from "react";
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

    return(
        (filteredRestaurents.length == 0) ? (<Shimmer/>) : (
            <div className="body">
                <div className="filter"> 
                    <div className="search">
                        <input 
                            type="text"
                            value={searchVal}
                            onChange={(e) => {setSearchVal(e.target.value)}} 
                        >
                        </input>
                        <button onClick={() => {
                            const filteredRests = listOfRestaurents.filter(res => res.info.name.toLowerCase().includes(searchVal.toLowerCase()));
                            setFilteredRestaurents(filteredRests);
                        }}>Search</button>
                    </div>
                    <button className="filter-btn"
                    onClick={() => { 
                        const filterList = resList.filter((res) => res.info.avgRating > 4.3)
                        console.log(filterList);
                        setListOfRestaurents(filterList); 
                    }}
                    >
                        Filter Top Rated
                    </button> 
                </div>
                <div className="res-container">
                    {
                        filteredRestaurents.map(restaurent => <RestaurentCard key={restaurent?.info?.id} resData={restaurent}/>)
                    } 
                </div>
            </div>
        )
    )
}

export default Body;