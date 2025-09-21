import {CDN_URL} from "../utils/constants"

const RestaurentCard = (props) =>{
    const {resData} = props;
    // console.log("resData-->",resData);
    const {cloudinaryImageId,name,cuisines,avgRating,sla,costForTwo} = resData?.info; 
    return( 
        <div className="m-4 p-4 w-[220px] rounded-lg bg-gray-100 hover:bg-gray-400">
            <img
                className="rounded-lg"
                alt="res-logo"
                src={CDN_URL + cloudinaryImageId}
            >
            </img>
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4> 
            <h4>{avgRating}</h4> 
            <h4>{costForTwo}</h4> 
            <h4>{sla?.deliveryTime + " minutes"}</h4> 
        </div>
    ); 
};

// Higher Order Component 

// Input - RestaurentCard => Restaurent Card Promoted

export const withPromotedLabel = (RestaurentCard) =>{
    return (props) =>{
        return(
            <div>
                <label className="absolute bg-black text-white font-bold rounded-sm">Open</label>
                <RestaurentCard {...props}/>
            </div>
        );
    };
};

export default RestaurentCard; 