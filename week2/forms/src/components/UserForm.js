import React, {useState} from "react";

const UserForm =(props) =>{
    //set input/data from form submitted
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [comfirmPassword, setComfirmPassword] = useState("");

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
        <div>
        <form onSubmit = {createUser}>
            <h1>Hook Form</h1>
            <div>
                <label htmlFor = "firstName">First Name: </label>
                <input type="text" name = "firstName" onChange={(e)=> setFirstName(e.target.value)} />
            </div>
            <div>
                <label htmlFor ="lastName">Last Name: </label>
                <input type="text" name ="lastName" onChange={(e)=> setLastName(e.target.value)} />
            </div>
            <div>
                <label htmlFor = "email">Email: </label>
                <input type="text" name = "email" onChange={(e)=> setEmail(e.target.value)} />
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" onChange={(e)=> setPassword(e.target.value)} />
            </div>
            <div>
                <label htmlFor ="comfirmPassword">Comfirm Password: </label>
                <input type="password" name="comfirmPassword" onChange={(e)=> setComfirmPassword(e.target.value)} />
            </div>
            <input type="submit" value="Create User" />
        </form>

        <div>
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