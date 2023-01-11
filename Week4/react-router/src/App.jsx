import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';

// const Home = (props) => {
//   return (
//     <div>
//       <h1 style={{color: "red"}}>Home Component</h1>
//       <Link to={"/about"}>Go to About</Link>
//     </div>
//   );
// }

// const About = (props) => {
//   return (
//     <div>
//       <h1 style={{color: "blue"}}>About Component</h1>
//       <Link to={"/"}>Go to Home</Link>
//     </div>
//   );
// }

function App() {
  return (
    <BrowserRouter>
      <h1>Routing Example</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
