import React from 'react';
import '../Components/MainPage.css';
import TopNavBar from './NavBars/TopNavBar';
import TeamBoard from './Teams/TeamBoard';


function MainPage() {
    return (
        <div className='main-page'>
            <TopNavBar className='top-nav-bar'/>
            <TeamBoard className='team-board'/>
        </div>
    )
}

export default MainPage
