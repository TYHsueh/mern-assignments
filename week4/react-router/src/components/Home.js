import React from 'react';
import {Link} from 'react-router-dom';

const Home = (props) => {
    return (
        <div>
            <h2>Home Component</h2>
            <Link to={"/about"} >About</Link>
            {/*this <Link></Link> will work since it will be inside <BrowserRouter> when being render in App.js*/}


        </div>
    );
}

export default Home;
