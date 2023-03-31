import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Welcome from "./components/Welcome";
import ParamComponent from './components/ParamComponent';
//import Number from "./components/Number";
//import Word from "./components/Word";




function App() {
  return (
    <div className="App">
      <h2>Routing Practice</h2>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Welcome/>} />

          {/* We have two potential routes/paths  for the ParamsComponent */}
          {/* These values (params) can be destructured from the useParam hook and used as variables, 
          just like values destructured from props! */}
          <Route path="/:word" element={<ParamComponent/>} />
          <Route path="/:word/:color/:bgCol" element={<ParamComponent/>} />
          {/*instead of rendering diff component, use one (ex. ParamComponent) with ternary condition, see note inside ParamComponent */}

        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
