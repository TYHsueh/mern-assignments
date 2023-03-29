import React from "react";
import './App.css';
import AxiosPokemonApi from "./components/AxiosPokemonApi";
import PokemonApi from "./components/PokemonApi";

function App() {

  return (
    <div className="App" >
      <PokemonApi />
      <AxiosPokemonApi />
    </div>
  );
}

export default App;
