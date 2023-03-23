import React from "react";

const MsgDisplay = (props) =>{
    const {currentMsg} = props;

    return(
        <div>
            <h2>The message is:</h2>
            <h3>{currentMsg}</h3>
        </div>
    )
};

export default MsgDisplay;