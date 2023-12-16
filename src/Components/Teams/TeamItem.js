import React from 'react';
import '../Teams/TeamItem.css';

function TeamItem(props) {
    return (
        <div className='team-item'>
            <h3>{props.TeamName}</h3>
        </div>
    )
}

export default TeamItem
