import React from 'react'
import '../Components/HomePage.css';
import MainPage from './MainPage';
import SideNavBar from './NavBars/SideNavBar';
import OneHomeDashBoard from './ApplicationDashboards/OneHomeDashBoard';

function HomePage() {
    return (
        <div className='home-page'>
            <SideNavBar className='side-Nav-bar' />

            <MainPage className='main-page' />
            {/* <OneHomeDashBoard className='main-page' /> */}
            {/* <SideNavBar className='side-Nav-bar' /> */}
        </div>
    )
}

export default HomePage
