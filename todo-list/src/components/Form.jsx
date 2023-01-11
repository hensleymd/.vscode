import { useState } from 'react';

const Form = (props) => {

    const [input, setInput] = useState("");

    const {list, setList} = props;

    const submitHandler = (e) => {
        e.preventDefault();
        setList([...list, {content: input, markedDelete: false, id: Math.floor(Math.random() * 10000).toString()}]);
        setInput("");
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                />
                <button>Submit</button>
            </form>
        </div>
    )
};

export default Form;