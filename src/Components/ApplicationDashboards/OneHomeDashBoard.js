import React from 'react';
import './OneHomeDashBoard.css';
import Sprint from '../Sections/Sprint';
import HeaderSearch from '../Sections/HeaderSearch';

function OneHomeDashBoard() {
    return (
        <div className='onehome-dashboard-container'>
            <div className="onehome-dashboard-left">
                <HeaderSearch />
                <Sprint />
            </div>
            <div className="onehome-dashboard-right">
                <HeaderSearch />
            </div>
        </div>
    )
}

export default OneHomeDashBoard;
