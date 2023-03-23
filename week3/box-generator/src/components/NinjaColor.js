import React, {useState} from 'react';

const NinjaColor = (props) => {
    const {nColorList, setNColorList} =props;
    const [nColor, setNColor] = useState({
        color:"",
        size:200
    });

    const nColorHandler =(e)=> {
        setNColor({...nColor, [e.target.name]:e.target.value})
    };

    const nSubmitHandler =(e)=> {
        e.preventDefault();
        setNColor({
            color:"",
            size:200
        });
        setNColorList([...nColorList, nColor]);
    };

    return (
        <div style={{
            margin:"50px",
            padding:"20px",
            width:"500px",
            border:"solid 2px grey"
        }}>
            <form onSubmit={nSubmitHandler}>
                <h2>Ninja Box</h2>
                <div style={{margin:"20px"}}>
                    <label>Color  </label>
                    <input type="text" name="color" onChange={nColorHandler} value={nColor.color} />
                </div>

                <div style={{margin:"20px"}}>
                    <label>Size  </label>
                    <input type="text" name="size" onChange={nColorHandler} value={nColor.size} />
                </div>
                <input type="submit" value="Add" />
            </form>
        </div>
    );
}

export default NinjaColor;
