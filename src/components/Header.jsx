import { useState, useContext } from "react";
import {LOGO_URL} from "../utils/constants";
import { Link } from "react-router-dom";
import userContext from "../utils/userContext";

const Header = () =>{
    const [logBtn,setLogBtn] = useState("Login");

    const data = useContext(userContext);
    console.log(data);
    return(
        <div className="flex justify-between shadow-lg sm: bg-yellow-50 lg:bg-blue-50">
            <div className="logo-container">
                <img className="w-30" src={LOGO_URL}></img>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/cart">Cart</Link>
                    </li>
                    <button className="loginButton" onClick={()=>{setLogBtn("Logout")}}>{logBtn}</button>
                    <li className="px-4">
                        <Link>{data.loggedInUser }</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;