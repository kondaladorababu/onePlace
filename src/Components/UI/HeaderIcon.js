import React from 'react';
import '../UI/HeaderIcon.css';

function HeaderIcon(props) {
    return (
        <div className='header-icon'>
            <props.Icon className={`${props.title === 'Logout' ? 'logout-Icon-color': ''}`}/>
            <p className='Header-icon-title'>{props.title}</p>
        </div >
    )
}

export default HeaderIcon
