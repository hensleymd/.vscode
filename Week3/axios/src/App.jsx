import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [movie, setMovie] = useState(false);
    const [title, setTitle] = useState("avatar");
    const [movieList, setMovieList] = useState([]);
    useEffect(() => {
      if (!movie) {
        
        axios
          .get("http://www.omdbapi.com/?apikey=2e278604&" + title)
          .then(res => setMovie(res.data))
          .catch((err) => console.log(err));
      }
      setMovieList([...movieList, movie])
    }, [movie]);

    const getData = (e) => {
      e.preventDefault();
      axios
        .get("http://www.omdbapi.com/?apikey=2e278604&" + title)
        .then(res => setMovie(res.data))
        .catch((err) => console.log(err));
        
    }

    return (
      <div className="App">
        <form onSubmit={getData}>
          <input onChange={e => setTitle(e.target.value)} type="text" />
        </form>
        <button>Click Me!</button>
        {movieList.length > 0 && movieList.map((m, i) => <p>{m.Title}</p>)}
      </div>
    );
};
    
export default App;
