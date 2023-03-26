import React, {useState} from 'react';

const TaskForm = (props) => {
    const{taskList, setTaskList} = props;

    const [task, setTask] = useState({
        title:"",
        taskDone: false
    });

    const changeHandler= (e) =>{
        if(e.target.type ==="checkbox"){
            setTask({...task, taskDone: !task.taskDone})
        }else{
            setTask({...task, [e.target.name]:e.target.value})
        }        
    };

    const submitHandler= (e) =>{
        e.preventDefault();
        setTask({
            title:"",
            taskdone:false
        });

        setTaskList([...taskList, task]);
    }

    return (
        <div style={{
            margin:"50px",
            display:"flex",
            justifyContent:"center"
            }}>

            <form style ={
                {padding:"10px",display:"flex", 
                flexDirection:"column",
                width:"450px", 
                alignItems:"center", 
                border:"solid 2px grey"}}
                onSubmit={submitHandler}>

                <label>Task:</label>
                <input type="text" name="title" onChange={changeHandler} value={task.title}/>
                
                <span>Task completed?</span>
                <input type="checkbox" name="taskdone" onChange={changeHandler} checked={task.taskDone} />
                
                <input type="submit" value="Add"/>
            </form>
        </div>
    );
}

export default TaskForm;
