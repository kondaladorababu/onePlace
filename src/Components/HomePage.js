import React from 'react'
import '../Components/HomePage.css';
import SideNavBar from './NavBars/SideNavBar';
import OneHomeDashBoard from './ApplicationDashboards/ApplicationDashBoard';

function HomePage() {
    return (
        <div className='home-page'>
            <SideNavBar className='side-Nav-bar' />
            <OneHomeDashBoard className='main-page' />
        </div>
    )
}

export default HomePage
