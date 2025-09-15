import React from "react"

class UserClass extends React.Component {

    constructor(props){
        super(props);
        console.log(props);

        this.state = { 
            userInfo : {
                login : "Dummy",
                url : "DefaultURL",
                type : "user",
                avatarURL : "avatar_url",
            }
        }
        console.log("Child constructor called");
    }

    async componentDidMount(){
        console.log("Child Mount called");
        const data = await fetch("https://api.github.com/users/SrikarAlladi");
        const json = await data.json();
        console.log("json------>",json);
        this.setState({
            userInfo : json
        });
    }

    componentWillUnmount(){

    }

    render(){
        console.log("Child render called",this.state.userInfo);
        const {url, type, login, avatar_url} = this.state.userInfo;
        return(
            <div>
                <div className="user-card"> 
                    <img src={avatar_url}></img>
                    <h1>{login}</h1>
                    <h1>Location : {url}</h1>
                    <h4>Type : {type}</h4> 
                </div>
            </div>
        )
    }
}

export default UserClass;