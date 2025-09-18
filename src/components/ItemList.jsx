import { CDN_URL } from "../utils/constants";

const ItemList = ({items}) =>{
    console.log("items---------->",items);
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
                <img src={CDN_URL + item.card.info.imageId} className="w-[50px] h-[50px]" ></img>
            </div>
        ))} 
        </div>
    )
}

export default ItemList;