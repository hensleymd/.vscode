import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

const people = [
  {
    firstName: "Matt",
    lastName: "Hensley",
    age: 30,
    hairColor: "Brown",
  },
  {
    firstName: "Ash",
    lastName: "Ketchum",
    age: 10,
    hairColor: "Black",
  },
  {
    firstName: "Thancred",
    lastName: "Waters",
    age: 32,
    hairColor: "White",
  },
  {
    firstName: "Hany",
    lastName: "Mukhtar",
    age: 27,
    hairColor: "Blonde",
  },
];

function App() {
  return (
    <div className="App">
      { people.map((personObj, index) => (
        <PersonCard
        key = { index }
        firstName = { personObj.firstName }
        lastName = { personObj.lastName }
        age = { personObj.age }
        hairColor = { personObj.hairColor }
        />
      ))}
    </div>
  );
}

export default App;
