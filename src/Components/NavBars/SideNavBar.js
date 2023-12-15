import React, { useState } from 'react';
import '../NavBars/SideNavBar.css';
import HeaderIcon from '../UI/HeaderIcon';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import PeopleIcon from '@mui/icons-material/People';
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded';
import LabelRoundedIcon from '@mui/icons-material/LabelRounded';
import ReportGmailerrorredRoundedIcon from '@mui/icons-material/ReportGmailerrorredRounded';

function SideNavBar() {
    const [sideNavBarStatus, setSideNavBarStatus] = useState('');
    const handleSideNavBar = () => {
        setSideNavBarStatus('close-side-nav-bar');
    }

    return (
        <div className={`sidenavbar ${sideNavBarStatus}`}>
            <div className="close-nav">
                <i className="fa-solid fa-xmark close-side-navBar" onClick={handleSideNavBar}></i>
            </div>
            <div className="nav-top">
                <div className="profile">
                    <img className='profile-image' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702598400&semt=ais" alt="" />
                    <h3>My Name</h3>
                    <h5>Team Name</h5>
                </div>

                <div className="navigation-headings">
                    <HeaderIcon className={'header-icon'} Icon={SpaceDashboardIcon} title={'DashBoard'} />
                    <HeaderIcon className={'header-icon'} Icon={PeopleIcon} title={'People'} />
                    <HeaderIcon className={'header-icon'} Icon={ChatBubbleRoundedIcon} title={'Messages'} />
                    <HeaderIcon className={'header-icon'} Icon={LabelRoundedIcon} title={'Labels'} />
                    <HeaderIcon className={'header-icon'} Icon={ReportGmailerrorredRoundedIcon} title={'Reports'} />
                </div>
            </div>
            <div className="nav-bottom">
                <HeaderIcon className={'header-icon'} Icon={LogoutRoundedIcon} title={'Logout'} />
            </div>
        </div>
    )
}

export default SideNavBar
