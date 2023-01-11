import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [pokemon, setPokemon] = useState("");
  const [data, setData] = useState({});
  
  const callApi = (e) => {
    e.preventDefault();
    fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => console.log("something went wrong", err))
  }
  return (
    <div className="App">
      <h1>I choose you!</h1>
      <form onSubmit={callApi}>
        <input onChange={(e) => setPokemon(e.target.value)} 
        type="text" />
      </form>
      <div class="card" style={{width: "18rem"}}>
        <img src={data.sprites && data?.sprites["front_default"]} 
          class="card-img-top" 
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">{data.name && data.name}</h5>
          <p class="card-text">{data.move2 && data.move2}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
