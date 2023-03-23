//rcf +tab
import React from 'react';

const DisplayNinjaColor = (props) => {
    const {nColorList} = props;
    return (
        
        <div style={{display:"flex", flexWrap:"wrap"}}>
            {
                nColorList.map((ninja, idx)=>(
                    <div key={idx} style={{
                        backgroundColor:ninja.color,
                        margin:"10px",
                        width:ninja.size+"px",
                        height:ninja.size+"px"
                    }}>
                    </div>
                ))
            }
            
        </div>
    );
}

export default DisplayNinjaColor;
