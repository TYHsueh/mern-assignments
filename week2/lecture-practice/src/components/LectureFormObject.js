import React, {useState} from 'react';
//using an form object to hold all data

const LectureFormObject = (props) => {
        let bool=true;

        const [show, setShow] = useState({
            title:"",
            releaseYear:1920,
            genre:""

        })
        const changeHandler=(e) =>{
            //console.log(e.target);
            console.log("Name", e.target.name);
            console.log("Value", e.target.value);
            //spread out the show(as it is an object), 
            //than get the [key_name(in this case the name of input)] and then set the value of that key into show object.
            //if the [name from input] match the key of the object, then react will update the value,
            //if the [name from input] does not match the key, then react will create a new key:value pair to the object
            setShow({...show, [e.target.name]:e.target.value})

            //or we can use function statement below
            //setShow(prevState =>({...prevState, [e.target.name]:e.target.value}))
        }

    return (
        <div style={{margin:"50px"}}>

            <form style ={{display:"flex", flexDirection:"column", width:"450px", alignItems:"center"}}>                


                <h3>Lecture Form Object</h3>
                {
                bool?
                <p>boolean variable is true</p>:
                <p>false</p>
            }   
                <label> Title:</label>
                {
                    show.title.length<3?
                    <p>The title must be 3 or more characters</p>:
                    null
                }
                <input type="text" name="title" onChange={changeHandler}/>
                
                <label>Release Year:</label>
                {
                    show.releaseYear < 1920?
                    <p>Show must be released no earlier then 1920</p>:
                    null
                }
                <input type="number" name="releaseYear" onChange={changeHandler} />

                <label>Genre:</label>
                <input type="text" name="genre" onChange={changeHandler} />
            </form>
        </div>
    );
}

export default LectureFormObject;
