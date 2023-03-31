import React from 'react';
import {useParams} from 'react-router-dom';

const ParamComponent = (props) => {
    const {word, color, bgCol} = useParams();

    return (
        <div>
            {
                isNaN(word)? //if word is not a number( isNaN(var) is a function to see if var a number )
                <p style={
                    color? //if parameter color exists
                    {color: color, backgroundColor:bgCol}://if color does not exist
                    null
                } >The word is : {word} </p>: // if word is a number then :
                <p>The number is : {word}</p>
            }
            
        </div>
    );
}

export default ParamComponent;
