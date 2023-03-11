import React from "react";

const PersonCard = (props) =>{
    //set props {firstName:"",
    //           lastName:"",
    //           age:"",
    //           hair:""
    //}
    const {firstName, lastName, age, hair} = props;
    
    return(
        <div>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {hair}</p>
        </div>
    )
}
export default PersonCard;