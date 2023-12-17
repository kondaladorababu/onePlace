import React from 'react';
import '../UI/DropdownButton.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

function DropdownButton(props) {
    let cssClasses = '';

    switch (props.status) {
        case 'In Progress':
            cssClasses = 'progress-color';
            break;
        case 'completed':
            cssClasses = 'completed-color';
            break;
        case 'Not Started':
            cssClasses = 'not-started-color';
            break;
        case 'UnKnown':
            cssClasses = 'edit-color';
            break;
        default:
            break;
    }

    cssClasses = `${cssClasses} dropdownbutton-container`;

    return (
        <div className={cssClasses} {...props}>
            <p>{props.children}</p>
            {!props.open && <ArrowDropDownIcon />}
            {props.open && <ArrowDropUpIcon />}
        </div>
    )
}

export default DropdownButton
