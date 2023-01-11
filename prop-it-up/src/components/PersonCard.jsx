import { useState } from "react";

const PersonCard = (props) => {

    const {lastName, firstName, age, hairColor} = props;
    const [stateAge, setStateAge] = useState(age);

    return (
        <>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {stateAge}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={() => setStateAge(stateAge + 1)}>
                Birthday Button for {firstName} {lastName}
            </button>
        </>
    );
};

export default PersonCard;