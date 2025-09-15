
import { useEffect, useState } from "react";

const useOnlineStatus = () =>{
    //check if user is online 
    // return boolean

    const [onlineStatus,setOnlineStatus] = useState(true);

    useEffect(() =>{

        window.addEventListener("offline",()=>{
            setOnlineStatus(false);
        });
        
        window.addEventListener("online",()=>{
            setOnlineStatus(true);
        });

    },[]);
    console.log(onlineStatus);
    return onlineStatus;
};

export default useOnlineStatus;