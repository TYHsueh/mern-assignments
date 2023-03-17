import React, {useState} from "react";

const LectureForm = (props) => {

    const [title, setTitle]=useState("");
    const [releaseYear, setReleaseYear]=useState(1920);
    const [genre, setGenre]=useState("");

    //"event" is really important(you can call it "e" or whatever(but not recommend) for browser to pass/get the value from input
    const handleTitle = (event) =>{
        setTitle(event.target.value);
    }
    const handleReleaseYear = (event) =>{
        setReleaseYear(event.target.value);
    }
    const handleGenre = (event) =>{
        setGenre(event.target.value);
    }

    return (
        <div style={{margin:"50px"}}>
            <h3>Lecture Form</h3>
            <form>
                <label> Title:</label>
                <input type="text" name="title" onChange={handleTitle}/>

                <label>Release Year:</label>
                <input type="number" name="releaseYear" onChange={handleReleaseYear} />

                <label>Genre:</label>
                <input type="text" name="genre" onChange={handleGenre} />
            </form>
        </div>
    );
}

export default LectureForm;
