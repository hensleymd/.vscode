import './App.css';
import PersonCard from './components/PersonCard';

const peopleArray = [
  {
    firstName: "Matt",
    lastName: "Hensley",
    age: 30,
    hairColor: "brown"
  },
  {
    firstName: "Hatt",
    lastName: "Mensley",
    age: 3,
    hairColor: "bald"
  },
  {
    firstName: "Person",
    lastName: "Three",
    age: 20,
    hairColor: "white"
  },
  {
    firstName: "Test",
    lastName: "Person",
    age: 100,
    hairColor: "black"
  },
]

function App() {
  return (
    <div className="App">
      {peopleArray.map((personObj, i) => (
        <PersonCard
          key={i}
          firstName = {personObj.firstName}
          lastName = {personObj.lastName}
          age = {personObj.age}
          hairColor = {personObj.hairColor}
        />
      ))}
    </div>
  );
}

export default App;
