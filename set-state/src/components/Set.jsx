import { useState } from "react";

const Set = (props) => {

    const [input, setInput ] = useState("");

    return (

        <>
            <div>
                Matt
                <input
                type="text"
                onChange={(e) => setInput(e.target.value)}
                />
            </div>
            <div>
                <p>{ input }</p>
            </div>
        </>

    );
};

export default Set;