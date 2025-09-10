import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

/*
Header 
    - logo
    - Nav Items
    - cart
Body 
    - Search Bar
    - Restaurent Container
    - Restaurent Card
        - Img
        - Name of Res, Star, Cuisine,delivery time
Footer
    - Copy Rights 
    - Contact Info
    - Address
*/

// JSX
// const jsxHeading = () => (<h1>Hey, There!</h1>);

const AppLayout = () =>{
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
