import  {useState} from 'react';

const Components = (props) => {

    const [firstName, setFirstName] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <input
                    type="text"
                    name="firstName"
                    onChange= { (e) => setFirstName(e.target.value)}
                    />
                </div>
                {firstName.length < 2 && firstName.length > 0 ?
                <p>First Name must be at least 2 characters</p> : null}
            </form>
        </>
    )
};

export default Components;