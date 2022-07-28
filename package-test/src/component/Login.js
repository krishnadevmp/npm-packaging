import React, { useState } from "react";
import validate from "validation-krishnadev";

const Login = () => {
    const [validationMessages, setValidationMessages] = useState({
        email: '',
        name: ''
    })
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        const validationResult = validate(name, value);

        setValidationMessages((prevState) => {
            return { ...prevState, [name]: validationResult }
        });
    }

    return <>
        <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input onChange={handleChange} type='email' name="email" />
            <span>{validationMessages.email}</span>
        </form>
    </>
}

export default Login;