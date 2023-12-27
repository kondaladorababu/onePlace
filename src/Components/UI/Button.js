import React from 'react';
import '../UI/Button.css';

function Button(props) {
    let cssClasses = '';

    switch (props.status) {
        case 'new':
            cssClasses = 'new-color';
            break;
        case 'edit':
            cssClasses = 'edit-color';
            break;
        case 'Not Started':
            cssClasses = 'not-started-color';
            break;
        case 'In-Progress':
            cssClasses = 'progress-color';
            break;
        case 'Completed':
            cssClasses = 'completed-color';
            break;
        default:
            break;
    }

    cssClasses = `${cssClasses} the-button`;

    return (
        <button className={cssClasses} {...props}>
            {props.children}
        </button>
    )
}

export default Button
