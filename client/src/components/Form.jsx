import { useState } from "react";
import Display from "./Display";

const Form = (props) => {
    const initialFormDate = {
        name: "",
        noseColor: "",
        fur: "",
    };

    const errorData = {
        nameError: "",
        noseColorError: "",
        furError: ""
    };

    const [ reindeer, setReindeer ] = useState(initialFormDate);

    const formDataHandler = (e) => {

    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        alert(`Hey, have you met ${reindeer.name} He's got a bright ${reindeer.noseColor} nose and ${reindeer.fur}`)
    };

    return (

        <>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label for="exampleInputEmail" class="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        id="exampleInputEmail"
                        aria-describedby="emailHelp"
                        value={reindeer.name}
                        onChange={(e) =>
                            setReindeer({ ...reindeer, noseColor: e.target.value})
                        }
                    />
                </div>
                <button type="submit" class="btn btn-primary"></button>
            </form>
            <Display name={reindeer.name} color={reindeer.noseColor} fur={reindeer.fur}}
        </>
    
    )

};

export default Form;