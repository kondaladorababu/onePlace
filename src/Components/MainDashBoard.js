import React from 'react'
import TeamsPage from '../Components/ResDashboard/TeamsPage'
import SideNavBar from './NavBars/SideNavBar';
import '../Components/MainDashBoard.css';

function MainDashBoard() {
    return (
        <div className='main-dashboard'>
            <SideNavBar />
            <TeamsPage />
        </div>
    )
}

export default MainDashBoard
