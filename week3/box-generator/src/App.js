import './App.css';
import BoxColor from './components/BoxColor';
import React, {useState} from "react";
import DisplayBoxColor from './components/DisplayBoxColor';
import NinjaColor from './components/NinjaColor';
import DisplayNinjaColor from './components/DisplayNinjaColor';
//import Test from './components/Test';

function App() {
  const [colorList, setColorList]= useState([]);

  const[nColorList, setNColorList]= useState([]);
  return (
    <div className="App">
      <h2>Box Generator</h2>
      
      <BoxColor colorList= {colorList} setColorList={setColorList} />
      <DisplayBoxColor colorList= {colorList} setColorList={setColorList }/>
      
      <NinjaColor nColorList= {nColorList} setNColorList= {setNColorList} />
      <DisplayNinjaColor nColorList= {nColorList} />
      
    </div>
  );
}

export default App;
