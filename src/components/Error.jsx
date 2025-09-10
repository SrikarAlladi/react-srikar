import { useRouteError } from "react-router-dom";

const Error = () =>{

    const res = useRouteError();
    console.log(res);

    return(
        <div>
            <h1>OOPS</h1>
            <h2>{res.status +" "+res.statusText}</h2>
            <h3>Something Went Wrong !!!!!!!!!!!!!!!!</h3>
        </div>
    )
}

export default Error; 