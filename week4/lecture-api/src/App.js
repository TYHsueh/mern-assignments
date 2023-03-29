import React, {useState, useEffect} from "react";
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([])
  useEffect(()=> {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
    .then(response =>{
      return response.json()
    })
    .then(response =>{
      setPokemon(response.results)
    })
    .catch(err =>{
      console.log(err)
    })
  }, []);

  return (
    <div className="App" >
      <h3>Pokemon API</h3>
      <ul style={{width:"200px"}} >
        {
        pokemon.map((pokemonOb, idx)=>{
          return(<li key={idx}>{pokemonOb.name}</li> )
        })
        }
      </ul>
    </div>
  );
}

export default App;
