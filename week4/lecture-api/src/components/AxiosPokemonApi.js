import React, {useState, useEffect} from 'react';
import axios from "axios";

const AxiosPokemonApi = () => {
    const [pokemon, setPokemon] = useState([])

    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
        //axios can specify the function to do with api
        .then(response=>{
            console.log(`Response:${response.data.results}`)
            //when using axios, the data we prefer is usually under key [data]
            //when fetch, the data is usually under key [result] after convert response to json. 
            setPokemon(response.data.results)
        })
        .catch(err=>{
            console.log(err)
        })
    }, []);
    //need to set an empty array 
    //so the useEffect/axios only run when the content of array changes 
    return (
        <div className="App" >
            <div>
                <h3>Axios Pokemon Api</h3>
                <lu style={{ width: "200px" }}> 
                    {
                        pokemon.map((p, idx)=>{
                            return <li key={idx}>{p.name}</li>
                    })
                    }
                </lu>
                {/*//for map(()=>{return}) or ((=>())) both work */}
            </div>
        </div>
    );
}

export default AxiosPokemonApi;
