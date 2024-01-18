
import './App.css';
import { useState } from 'react'
import axios from 'axios';

function App() {


  const [pokemon, setPokemon] = useState([])

  const fetchPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(actualServerRes => {
        console.log(actualServerRes);
        setPokemon(actualServerRes.results);
      })
      .catch(err => console.log(err));
  };

  const axiosPokemon =() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
    .then(res => {
      console.log(res.data.results)
      setPokemon(res.data.results)
    })
    .catch(err => console.log(err))
  }






  return (
    <div>
      <h1>POKEMON</h1>
      <button onClick={fetchPokemon}>fetch pokemon</button>

      <ul>
        {
          pokemon.map((poke, i) => {
            return <li key={i}>{poke.name}</li>
          })
        }
      </ul>

    </div>

  );
}

export default App;
