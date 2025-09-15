import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{

    constructor(props){
        super(props)
        console.log("Parent constructor called");
    }

    componentDidMount(){
        console.log("Parent Mount called");
    }

    render(){
        console.log("Parent Render called");
        return(
            <div>
                About Us Page........
                {/* <User name={"Srikar Alladi"} /> */}
                <UserClass name={"Srikar Alladi"} age={25}/>
            </div>
        )
    }
}


// const About = () =>{    
//     return(
//         <div>
//             About Us Page........
//             {/* <User name={"Srikar Alladi"} /> */}
//             <UserClass name={"Srikar Alladi"} age={25}/>
//         </div>
//     )
// }
export default About;