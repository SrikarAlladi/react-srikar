const Contact = () => {
    return(
        <div>
            <h1 className="font-bold text-3xl p-2 m-2">
                Contact US
            </h1>
            <input 
                type="text"
                className="border border-black p-2 m-2 rounded-lg"
                placeholder="Name"
            /> 
            <input 
                type="text"
                className="border border-black p-2 m-2 rounded-lg"
                placeholder="message"
            /> 
            <button className=" border border-black p-2 m-3 bg-gray-400 rounded-lg"> 
                Submit
            </button>
        </div>

    )
}

export default Contact;