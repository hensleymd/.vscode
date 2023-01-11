import {useState} from "react";

const Display = (props) => {

    const {list, setList} = props;

    const handleCompleted = (todo) => {
        todo.markedDelete = !todo.markedDelete;
        setList([...list])
    };

    const styled = (markedDelete) => {
        if (markedDelete === true) {
            return "finished";
        } else {
            return "not finished";
        }
    };

    const deleteButton = (idFromList) => {
        setList(
            list.filter((todo, i) => {
                return todo.id !== idFromList;
            })
        );
    };

    return (
        <div>
            {list.map((todo, i) => (
                <div className={styled(todo.markedDelete)} key={todo.id}>
                    {""}
                    <p>{todo.content}</p>
                    <input type="checkbox" onChange={() => handleCompleted(todo)} />
                    <button onClick={() => deleteButton(todo.id)}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default Display;