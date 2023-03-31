import React from 'react';
import {Link} from 'react-router-dom';
//<a href="/">show text</a>
//<Link to={"/"}>show text</Link> works the same as anchor tag, 
//however it changes URL path  without causing the page to refresh/re-render as traditional anchor tags would do,
//which can cause the lost of our uesState data within app 

const About = (props) => {
    return (
        <div>
            <h2>About Component</h2>
            <Link to={"/home"} >Home</Link>
        </div>
    );
}

export default About;
