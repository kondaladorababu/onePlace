import React from 'react'
import SideNavBar from './NavBars/SideNavBar';
import '../Components/HomePage.css';
import MainPage from './MainPage';

function HomePage() {
    return (
        <div className='home-page'>
            <SideNavBar className='side-Nav-bar' />
            <MainPage className='main-page' />
        </div>
    )
}

export default HomePage
