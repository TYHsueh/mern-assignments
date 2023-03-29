import React, {useState, useEffect} from 'react';

const PokemonApi = () => {
    const [pokemon, setPokemon] = useState([])
    useEffect(()=> {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => {
                console.log(response) //the responese is the whoel web info
                return response.json() //convert the response to json
                
            })
            .then(response => {
                console.log(response) //now the response is the jason and the pokemon array is under key [results]
                setPokemon(response.results)//set the pokemon array as 
            })
            .catch(err => {
                console.log(err)
            })
    }, []);

    return (
        <div className="App" >
            <div>
            <h3>Pokemon API</h3>
            <ul style={{ width: "200px" }} >
                {
                    pokemon.map((pokemonOb, idx) => {
                        return (<li key={idx}>{pokemonOb.name}</li>)
                    })
                }
            </ul>
        </div>
        </div>
    );

}

export default PokemonApi;
