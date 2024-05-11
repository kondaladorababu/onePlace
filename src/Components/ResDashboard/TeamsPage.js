import React from 'react';
import '../ResDashboard/TeamsPage.css';
import TopNavBar from '../NavBars/TopNavBar';
import TeamBoard from './TeamBoard';


function TeamsPage() {
    return (
        <div className='main-page'>
            <TopNavBar className='top-nav-bar' />
            <TeamBoard className='team-board' />
        </div>
    )
}

export default TeamsPage;
