import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

const Form = (props) => {
    const [color, setColor] = useState("");
    const [number, setNumber] = useState(0);

    const navigate = useNavigate();

    const submitHandler= (e)=>{
        e.preventDefault();
        navigate(`/word/${color}/${number}`)
        //when pass variables into navigate route, since we are using ${},
        //we need to change"/" to `/` (in order to use ${})
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>Type in a color</label>
                <input type="text" name ="color" onChange={(e)=>setColor(e.target.value)} />
                <br></br>
                <label>Enter a number</label>
                <input type="number" name="number" onChange={(e)=>setNumber(e.target.value)} />
                <br></br>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
}

export default Form;
