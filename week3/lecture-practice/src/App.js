import React, {useState} from "react";
import './App.css';
import MsgDisplay from './components/MsgDisplay';
import MsgForm from './components/MsgForm';

function App() {
  const [currentMsg, setCurrentMsg] = useState("The message is empty");


  return (
    <div className="App">
      <MsgForm setCurrentMsg={setCurrentMsg} />
      <MsgDisplay currentMsg={currentMsg} />
      
    </div>
  );
}

export default App;
