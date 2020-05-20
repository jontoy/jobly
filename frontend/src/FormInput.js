import React from 'react';

const FormInput = ({type="text", value, name, placeholder, handleChange}) => {
    return (
        <input 
        type={type} 
        value={value} 
        name={name} 
        placeholder={placeholder} 
        onChange={handleChange}/>
    )
}

export default FormInput;

