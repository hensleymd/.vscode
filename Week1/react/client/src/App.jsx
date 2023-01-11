import './App.css';
import List from './components/List';
import Hello from './components/Hello';

function App() {

  const dessertList = [
    "Ice Cream", 
    "Cake", 
    "Pecan Pie", 
    "Pumpkin Pie", 
    "Horchata", 
    "Apple Pie", 
    "Lemon Bread"
  ];
  return (
    <div className="App">
      <Hello />
      <List />
      <List list={dessertList} myName={"Matt Hensley"} />
    </div>
  );
}

export default App;
