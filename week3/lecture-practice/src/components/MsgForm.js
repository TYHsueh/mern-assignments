import React, {useState} from "react";

const MsgForm = (props) => {
    const [message, setMessage] =useState("");
    const {setCurrentMsg}=props;

    const handleSubmit = (e) =>{
        e.preventDefault();
        setMessage("");
        setCurrentMsg(message);
    };

    return(
        <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column", width:"450px"}}>
            <h3>Set Message Here</h3>
            <textarea 
                rows="3" column ="10"
                onChange={(e) =>setMessage(e.target.value)}
                value={message}></textarea>
            <input type="submit" value="send message" />
        </form>
    );

}
export default MsgForm;