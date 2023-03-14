import React, {useState} from "react";

const PersonCard = (props) =>{
    //set props {firstName:"",
    //           lastName:"",
    //           age:"",
    //           hair:""
    //}
    const {firstName, lastName, age, hair} = props;
    //useState code:
    const [stateAge, setStateAge] = useState(age);
    
    return(
        <div>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {stateAge}</p>
            <p>Hair Color: {hair}</p>
            <button onClick = {() => setStateAge(stateAge +1)}>Birthday for {firstName} {lastName}</button>
        </div>
    )
}
export default PersonCard;