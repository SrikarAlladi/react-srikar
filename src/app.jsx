import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurentMenu";
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
//import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"));

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

    const [userName,setUserName] = useState();
    

    useEffect(() => {
        const data = {
            name: "Srikar Alladi",
        };
        setUserName(data.name);
    },[])

    return (
        <Provider store={appStore}>
            <userContext.Provider value={{loggedInUser: userName}}>
                <div className="app">
                    <Header/>
                    <Outlet/>
                </div>
            </userContext.Provider>
        </Provider>
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
            },{
                path: "/restaurent/:resId",
                element: <RestaurantMenu/>
            },{
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading.......</h1>}> <Grocery/> </Suspense> 
            }
        ],
        errorElement: <Error/>
    }, 
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
