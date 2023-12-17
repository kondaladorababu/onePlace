import React, { useState } from 'react';
import '../NavBars/SideNavBar.css';
import HeaderIcon from '../UI/HeaderIcon';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import PeopleIcon from '@mui/icons-material/People';
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded';
import LabelRoundedIcon from '@mui/icons-material/LabelRounded';
import ReportGmailerrorredRoundedIcon from '@mui/icons-material/ReportGmailerrorredRounded';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CloseIcon from '@mui/icons-material/Close';

function SideNavBar() {
    const [maxNav, setMaxNav] = useState(true);
    const handleSideNavBar = () => {
        setMaxNav(!maxNav);
    }

    return (
        <div className={`sidenavbar ${!maxNav ? 'minimize-side-nav-bar' : ''}`}>
            <div className="close-nav" onClick={handleSideNavBar}>
                {maxNav && <CloseIcon />}
                {!maxNav && <KeyboardArrowRightIcon />}
            </div>
            <div className="nav-top">
                <div className="profile">
                    <img className={`profile-image ${!maxNav ? 'profile-image-min' : ''}`} src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702598400&semt=ais" alt="" />
                    {maxNav && <>
                        <h3>My Name</h3>
                        <h5>Team Name</h5>
                    </>
                    }
                </div>

                {maxNav &&
                    <div className="navigation-headings">
                        <HeaderIcon className={'header-icon'} Icon={SpaceDashboardIcon} title={'DashBoard'} />
                        <HeaderIcon className={'header-icon'} Icon={PeopleIcon} title={'People'} />
                        <HeaderIcon className={'header-icon'} Icon={ChatBubbleRoundedIcon} title={'Messages'} />
                        <HeaderIcon className={'header-icon'} Icon={LabelRoundedIcon} title={'Labels'} />
                        <HeaderIcon className={'header-icon'} Icon={ReportGmailerrorredRoundedIcon} title={'Reports'} />
                    </div>
                }
                {!maxNav &&
                    <div className="navigation-headings">
                        <HeaderIcon className={'header-icon'} Icon={SpaceDashboardIcon} />
                        <HeaderIcon className={'header-icon'} Icon={PeopleIcon} />
                        <HeaderIcon className={'header-icon'} Icon={ChatBubbleRoundedIcon} />
                        <HeaderIcon className={'header-icon'} Icon={LabelRoundedIcon} />
                        <HeaderIcon className={'header-icon'} Icon={ReportGmailerrorredRoundedIcon} />
                    </div>
                }
            </div>
            <div className="nav-bottom">
                {maxNav &&
                    <HeaderIcon className={'header-icon'} Icon={LogoutRoundedIcon} title={'Logout'} />
                }

                {!maxNav &&
                    <HeaderIcon className={'header-icon'} Icon={LogoutRoundedIcon} />

                }
            </div>
        </div>
    )
}

export default SideNavBar
