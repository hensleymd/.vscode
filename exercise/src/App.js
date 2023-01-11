import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import DisplayList from './components/DisplayList';
import { useState } from 'react';

function App() {
  const [reindeerList, setReindeerList] = useState([]);

  const removeFromList = (id) => {
    const filteredList = [...reindeerList].filter((deer) => {
      return deer.id !== id
    });
    setReindeerList(filteredList);
  };

  const updateList = (e, name, index) => {
    e.preventDefault();
    const copiedList = [...reindeerList];
    copiedList[index] = {...copiedList[index], name: name};
    setReindeerList(copiedList);
  };

  const addToList = (record) => {
    setReindeerList([...reindeerList, record]);
  };
  return (
    <div className="App">
      <Form list={reindeerList} addToList={addToList} />
      <DisplayList 
      updateList={updateList} 
      removeFromList={removeFromList} 
      list={reindeerList} />
    </div>
  );
}

export default App;
