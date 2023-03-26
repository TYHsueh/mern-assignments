import React from 'react';

const DispalyTask = (props) => { 
    const {taskList, setTaskList} =props;

    const toggleTask=(currentTask) =>{
        const updatedTaskList= taskList.map((task)=>{
            if(currentTask === task){
                task.taskDone= !task.taskDone
            }
            return task
    })
    setTaskList(updatedTaskList)
    };

    const deleteHandler=(currentTask) =>{
        const updatedShowList= taskList.filter((task)=> task !== currentTask)
        setTaskList(updatedShowList)
    };

    return (
        <div>
            {
            taskList.map((task, idx)=>(
                <div key={idx}
                style={{
                    display:"flex",
                    padding:"10px",
                    alignItems:"center",
                    justifyContent:"center"
            }}>
                    {
                        task.taskDone?
                        <h3 style={{textDecoration:"line-through"}} >{task.title}</h3>:
                        <h3>{task.title}</h3>
                    }                  
                    <input type="checkbox" name="taskDone" checked={task.taskDone} onClick={()=> toggleTask(task)} />

                    <button onClick={() =>deleteHandler(task)} style={{backgroundColor:"red", color:"white", height:"20px"}} >Delete Task</button>
                </div>
            ))
            }
            
        </div>
    );
}

export default DispalyTask;
