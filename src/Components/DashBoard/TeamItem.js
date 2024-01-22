import React from 'react';
import './TeamItem.css';

function TeamItem(props) {
    return (
        <div className='team-item' onClick={props.onClick}>
            <h3>{props.TeamName}</h3>
        </div>
    )
}

export default TeamItem
