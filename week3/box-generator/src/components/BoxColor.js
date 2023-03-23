import React, {useState} from "react";

const BoxColor=(props) =>{

    const {colorList, setColorList} =props;
    const [color, setColor]=useState("");

    const colorHandler = (e)=>{
        setColor(e.target.value);
    }
    const submitHandler= (e) =>{
        e.preventDefault();
        setColor("");
        setColorList([...colorList, color]);
    }

    return(
        <div>
            <form onSubmit={submitHandler}>
                <label>Color  </label>
                <input type="text" name="color" onChange={colorHandler} value={color} />
                <input type="submit" value="Add" />
            </form>
        </div>
    );
};
export default BoxColor;