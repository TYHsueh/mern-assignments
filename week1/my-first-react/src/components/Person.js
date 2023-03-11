import React from "react";
// Here we create the Person Component that will receive props and we know we want to have a user
//     first and last name

const Person = (props) =>{
    // We can assume props looks like an object literal with 2 keys and values because of what was passed in
    // {
    //    "firstName":"Bill",
    //    "lastName":"Justice"
    // }
    return(
        <div>
            <h2>I am a person</h2>
            <h3>My name is: {props.firstName} {props.lastName}.</h3>

        </div>
    )
}
export default Person;