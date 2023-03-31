import React from 'react';
import {useParams} from "react-router-dom";
//useParams can take variables from url path(path variables) and pass it to component as props

const Word = (props) => {
    const {color, id} = useParams();
    //this "anything" must match the route setting from App.js
    //destructure the path variables ans pass it as props using useParam

    return (
        <div>
            <h2 style={{color:color}}>Word Component</h2>
            <h3>you typed in : {id} </h3>

        </div>
    );
}

export default Word;
