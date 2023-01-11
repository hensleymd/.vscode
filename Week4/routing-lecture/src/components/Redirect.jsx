import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Redirect = props => {
    
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/home');
    }, []);
}

export default Redirect;