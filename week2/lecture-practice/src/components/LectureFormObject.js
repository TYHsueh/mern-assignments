import React, {useState} from 'react';
//using an form object to hold all data

const LectureFormObject = (props) => {
        //let bool=true;
        // for useState, you always want to set sth at initail ex empty string or array or some content(never leave it blank)

        //To lift this useState to App.js so the other child component can access the data:
        //1. move "const [showList, setShowList] = useState([])" up to App.js -->see App.js
        //const [showList, setShowList] = useState([])

        //3. finally plant showList and setShowList into props
        console.log(props);
        const {showList, setShowList}=props;

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

        const submitHandler= (e) =>{
            e.preventDefault();
            //console.log(`this is the new show: ${JSON.stringify(show)}`);
            //two way binding
            setShow({
                title:"",
                releaseYear:1920,
                genre:""
            });

            //since showList is an array, setShowList add new show object to the end of showList
            setShowList([...showList, show]);
        }

    return (
        <div style={{margin:"50px"}}>

            <form style ={
                {padding:"10px",display:"flex", 
                flexDirection:"column", 
                width:"450px", 
                alignItems:"center", 
                border:"solid 2px grey"}}
                onSubmit = {submitHandler}>                


                <h3>Lecture Form Object</h3>
                <h3>Add Your Favorite TV Shows!</h3>
                {/*{
                bool?
                <p>boolean variable is true</p>:
                <p>false</p>
                } */}
                <label> Title:</label>
                {
                    show.title.length<3?
                    <p>The title must be 3 or more characters</p>:
                    null
                }
                <input type="text" name="title" onChange={changeHandler} value={show.title}/>
                
                <label>Release Year:</label>
                {
                    show.releaseYear < 1920?
                    <p>Show must be released no earlier then 1920</p>:
                    null
                }
                <input type="number" name="releaseYear" onChange={changeHandler} value={show.releaseYear} />

                <label>Genre:</label>
                <input type="text" name="genre" onChange={changeHandler} value={show.genre} />

                <input type="submit" value="Add Show"/>
            </form>
        </div>
    );
}

export default LectureFormObject;
