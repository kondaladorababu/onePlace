import React from 'react'
import MainPage from './MainPage'
import SideNavBar from './NavBars/SideNavBar';
import '../Components/MainDashBoard.css';

function MainDashBoard() {
    return (
        <div className='main-dashboard'>
            <SideNavBar />
            <MainPage />
        </div>
    )
}

export default MainDashBoard
