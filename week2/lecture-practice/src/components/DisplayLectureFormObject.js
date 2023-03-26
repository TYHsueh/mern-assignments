import React from 'react';

const DisplayLectureFormObject =(props) =>{
    const {showList, setShowList} =props; //de-construct the props so we dont need to write props.showList later

    //toggleShow need to take in argument to make changes
    //to update the specific show and whole showList: 
    //1.map through showList array looking for the specific show we passed in
    //then 2.change the watchedShow key of that show 
    const toggleShow= (tvShow) =>{
        const updatedShowList = showList.map((show)=>{
            if(show === tvShow){
                show.watchedShow = !show.watchedShow
            }
            return show
        })
        setShowList(updatedShowList)
    };

    const deleteHandler=(tvShow) =>{
        const updatedShowList = showList.filter((show)=> show !== tvShow )
        setShowList(updatedShowList)
    };

    //the key={idx} is to satisfy the react requirement that "Each child in a list should have a unique 'key' props"
    //this is how react track and update every specific div . Later we will use id from database to identify this 
    return (
        <div style={{display:"flex", justifyContent:"center"}}>
            {
                showList.map((show, idx) =>(
                    <div key={idx} 
                        style={{
                            display:"flex",
                            flexDirection:"column",
                            margin:"20px",
                            padding:"10px",
                            border:"solid 2px grey"
                    }}>
                        {
                            show.watchedShow?
                            <h3 style={{textDecoration:"line-through"}}>Title:{show.title} </h3>:
                            <h3>Title: {show.title}</h3>
                        }
                        
                        <h3>Release Year: {show.releaseYear}</h3>
                        <h3>Genre: {show.genre}</h3>
                        <span>Watched this show?</span>
                        <input type="checkbox" name="watchedShow" checked={show.watchedShow} onClick={() =>toggleShow(show)} />

                        <button style={{backgroundColor:"red", color:"white"}} onClick={()=> deleteHandler(show)} >Delete Show</button>
                    </div>
                ))
            }
        </div>
        );
    }

export default DisplayLectureFormObject;
