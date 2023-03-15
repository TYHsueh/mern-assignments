import React, {useState} from "react";

const UserForm =(props) =>{
    //set input/data from form submitted
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [comfirmPassword, setComfirmPassword] = useState("");

      // using an object to hold style options for our results div
    const formDataDivStyle = {
    textAlign: "center", 
    width: "450px", 
    margin: "auto",
    border: "1px solid darkgrey",
    }

    const inputDataDivStyle = {
    borderRadius: "5px",
    backgroundColor: "#f2f2f2",
    border: "1px solid darkgrey",
    padding: "0px 10px",
    margin: "5px",
    width: "450px", 
    }


    //use these data to create a user
    const createUser = (e) =>{
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        // create a javascript object to hold all of the values
        /*const newUser= {
            userName: username,
            email: email,
            password:password
        }; */
        //this can be rewrited to shorten ES6 version
        const newUser = {firstName, lastName, email, password, comfirmPassword};
        //try to console.log newUser
        console.log("Welcome", newUser);
        //two-way binding for input data
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setComfirmPassword("");
    };

    //return show the format/form to be shown on App.js(DOM)
    return (
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <form onSubmit = {createUser} style={{margin: "20px"}}>
            <h1>Hook Form</h1>
            <div style={inputDataDivStyle}>
                <label htmlFor = "firstName">First Name: </label>
                <input type="text" name = "firstName" onChange={(e)=> setFirstName(e.target.value)} value={firstName}/>
            </div>
            <div style={inputDataDivStyle}>
                <label htmlFor ="lastName">Last Name: </label>
                <input type="text" name ="lastName" onChange={(e)=> setLastName(e.target.value)} />
            </div>
            <div style={inputDataDivStyle}>
                <label htmlFor = "email">Email: </label>
                <input type="text" name = "email" onChange={(e)=> setEmail(e.target.value)} />
            </div>
            <div style={inputDataDivStyle}>
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" onChange={(e)=> setPassword(e.target.value)} />
            </div>
            <div style={inputDataDivStyle}>
                <label htmlFor ="comfirmPassword">Comfirm Password: </label>
                <input type="password" name="comfirmPassword" onChange={(e)=> setComfirmPassword(e.target.value)} />
            </div>
            <input type="submit" value="Create User" />
        </form>

        <div style={formDataDivStyle}>
            <h2>Hook Form Data</h2>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Comfirm Password: {comfirmPassword}</p>


        </div>
        </div>
    );

}
export default UserForm; 