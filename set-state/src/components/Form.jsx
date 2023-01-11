import { useState } from 'react';

const Form = (props) => {
    const initialFormData = {
        name: "",
        noseColor: "",
        fur: "",
    }

    const errorData = {
        nameError: "",
        noseColorError: "",
        furError: ""
    }

    const {reindeer, setReindeer} = useState(initialFormData);

    return
};

export default Form;