import{BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Home from "./components/Home";
import About from "./components/About";
import Word from "./components/Word";
import Word2 from "./components/Word2";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
    <h3>Routing in React with react-router-dom.</h3> 
    <h3>Don't forget to 'npm install react-router-dom' to start</h3>
    <BrowserRouter>
      <Link to={"/home"} >Home</Link>
      <br></br>
      <Link to={"/about"} >About</Link>
      <Routes>
        <Route path="/" element={<Form/>} />
        <Route path='/home' element={<Home/>} /> 
        {/*when going to 'localhost:3000/home', render Home component*/}
        
        <Route path ="/about" element={<About/>} />

        <Route path="/word/:anything" element={<Word/>} />
        {/*using ":" followed by variables for using useParams. 
        The variable [anything] need to match the path variable we set inside component using useParams*/}
        {/*you can also pass several variables as "/word/:color/:id" */}

        <Route path="word/:color/:id" element={<Word2/>} />
        {/*path variables comes from <Word2/> navigate path (`/word/${color}/${number}`)
        :color is from ${color} and :id is from ${number}*/}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
