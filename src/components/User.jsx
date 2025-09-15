const User = ({name}) =>{
    return(
        <div className="user-card">
            <h1>Name: {name}</h1>
            <h4>Age : 25</h4>
            <h4>Twitter profile</h4>
        </div>
    )
}

export default User;