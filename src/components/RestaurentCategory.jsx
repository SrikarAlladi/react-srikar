import ItemList from "./ItemList";

const RestaurentCategory = ({data, showItems,setShowIndex}) =>{
  
    const handleClick = () =>{
        console.log("Handle Clicked");
        setShowIndex();
    }

    return(
        <div>
            {/*Header*/}
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">  
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold">{data.title} ({(data.itemCards).length})</span>
                    {showItems ? <span>⬆️</span> : <span>⬇️</span>}
                </div>
                {/*Body*/}
                {showItems && <ItemList items={data.itemCards}/>}
            </div>
        </div>
    )
}

export default RestaurentCategory;