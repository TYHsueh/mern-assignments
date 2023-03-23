import LectureFormObject from './components/LectureFormObject';
import './App.css';
import LectureForm from './components/LectureForm';
import Groceries from './components/Groceries';
import {useState} from 'react';
import DisplayLectureFormObject from './components/DisplayLectureFormObject';

function App() {
  
  const [showList, setShowList] = useState([]);
  //2. lift useState to <LectureFormObject> so the data inside can go up to App.js
  //then pass showList and setShowList as props to <LectureFormObject>

  return (
    <div className="App">
      <Groceries/>
      <LectureForm/>
      
      <LectureFormObject showList={showList} setShowList={setShowList} />
      <DisplayLectureFormObject showList={showList} setShowList={setShowList}/>

      
        
    </div>
  );
}

export default App;
