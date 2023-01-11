import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [data, setData] = useState({});

  const callApi = () => {
    fetch('https://www.dnd5eapi.co/api/classes/cleric')
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((err) => console.log("OOPS", err));
  }
  return (
    <div className="App">
      <h1>{JSON.stringify(data)}</h1>
      <button onClick={callApi}>Button</button>
    </div>
  );
}

export default App;
