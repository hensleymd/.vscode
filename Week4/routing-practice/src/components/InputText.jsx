import { useParams } from "react-router-dom";

const InputText = props => {

    const {text, color, background} = useParams();

    return (
        <div>
            {
                isNaN(text)?
                <h2 style={color?{color: color, backgroundColor: background} : null}>
                    This word is: {text}
                </h2>
                :
                <h2 style={color?{color: color, backgroundColor: background} : null}>
                    This number is: {text}
                </h2>
            }
        </div>
    ) 
}

export default InputText;