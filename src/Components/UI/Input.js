import React from 'react';
import '../UI/Input.css';

function Input({ label, id, ...props }) {
    return (
        <div className="user-input">
            <label htmlFor={id}>{label}</label>
            <input id={id} name={id} {...props}></input>
        </div>
    );
}

export default Input
