import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Redirect from './components/Redirect';
import InputText from './components/InputText';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Redirect/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/:text' element={<InputText/>} />
          <Route path='/:text/:color/:background' element={<InputText/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
