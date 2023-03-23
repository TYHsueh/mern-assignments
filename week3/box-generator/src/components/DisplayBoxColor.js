//rcf+tab
import React from 'react';

const DisplayBoxColor = (props) => {
    const {colorList} =props;
    return (
        <div style={{display:"flex"}}>
            {
                colorList.map((item, idx) => (
                    <div key={idx} style={{
                        backgroundColor:item,
                        margin: "10px",
                        height:"100px",
                        width:"100px"
                    }}>                        
                    </div>
                ))
            }
            
        </div>
    );
}

export default DisplayBoxColor;
