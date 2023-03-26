import React, {useState} from "react";
import './App.css';
import DispalyTask from "./components/DispalyTask";
import TaskForm from "./components/TaskForm";

function App() {
  const [taskList, setTaskList] =useState([]);


  return (
    <div className="App">
      <TaskForm taskList={taskList} setTaskList={setTaskList}/>
      <DispalyTask taskList={taskList} setTaskList={setTaskList} />

    </div>
  );
}

export default App;
