
const Button = (props) => {

    return (
        <button onClick={(e) => alert("You clicked me!")} 
        className="btn btn-primary">Click Me!</button>
    )
}

export default Button;