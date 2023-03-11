import './App.css';
import Person from "./components/Person";
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <h1>Hello Dojo!</h1>
      <h2>Things I need to do</h2>
      <ul>
        <li>Learn React</li>
        <li>Climb Mt. Everest</li>
        <li>Run a maratho</li>
        <li>Feed the dog</li>
      </ul>
      <Person firstName={"Bill"} lastName={"Justice"} />
      <Person firstName={"Amanda"} lastName={"Brandon"} />
      <Person firstName={"Tom"} lastName={"Cruise"} />

      <PersonCard firstName={"Jane"} lastName={"Doe"} age={45} hair={"black"} />
      <PersonCard firstName={"John"} lastName={"Smith"} age={88} hair={"brown"} />
      <PersonCard firstName={"Millard"} lastName={"Fillmore"} age={50} hair={"brown"} />
      <PersonCard firstName={"Maria"} lastName={"Smith"} age={62} hair={"brown"} />
    
    
    </div>

  );
}

export default App;
