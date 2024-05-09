import React from 'react';
import './TeamItem.css';

function TeamItem(props) {
    return (
        <div className='team-item' onClick={props.onClick}>
            <h4>{props.TeamName}</h4>
        </div>
    )
}

export default TeamItem
