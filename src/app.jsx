import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurentMenu";

import { createBrowserRouter, RouterProvider , Outlet} from "react-router-dom";

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
            <Outlet/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children:[
            {
                path: "/",
                element: <Body/>
            },{
                path: "/about",
                element: <About/>
            },{
                path: "/contact",
                element: <Contact/>
            },{
                path: "/cart",
                element: <Cart/>
            }
        ],
        errorElement: <Error/>
    },{
        path: "/about",
        element: <About/>
    },{
        path: "/contact",
        element: <Contact/>
    },{
        path: "/restaurent/:resId",
        element: <RestaurantMenu/>
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
