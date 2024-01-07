import React from 'react';
import './ApplicationDashBoard.css';
import Sprint from '../Sections/Sprint';
import HeaderSearch from '../Sections/HeaderSearch';
import Activities from '../Sections/Activities';

function ApplicationDashBoard() {
    return (
        <div className='dashboard-container'>
            <div className="dashboard-left">
                <HeaderSearch />
                <Sprint />
            </div>
            <div className="dashboard-right">
                <Activities />
            </div>
        </div>
    )
}

export default ApplicationDashBoard;
