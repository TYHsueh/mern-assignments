import React from 'react';

const DisplayLectureFormObject =(props) =>{
    const {showList, setShowList} =props; //de-construct the props so we dont need to write props.showList later

    //the key={idx} is to satisfy the react requirement that "Each child in a list should have a unique 'key' props"
    //this is how react track and update every specific div . Later we will use id from database to identify this 
    return (
        <div>
            {
                showList.map((show, idx) =>(
                    <div key={idx}>
                        <h3>Title: {show.title}</h3>
                        <h3>Release Year: {show.releaseYear}</h3>
                        <h3>Genre: {show.genre}</h3>
                    </div>
                ))
            }
        </div>
        );
    }

export default DisplayLectureFormObject;
