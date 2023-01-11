import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((response) => {setApiData(response.data.results)})
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      <h1>Axios Pokemon</h1>
      <ul>
        {apiData.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}

      </ul>
    </div>
  );
}

export default App;
