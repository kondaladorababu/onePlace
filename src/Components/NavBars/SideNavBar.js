import React, { useContext, useState } from 'react';
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
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import UIContext from '../../Store/UIContextProvider';

function SideNavBar() {
    const [maxNav, setMaxNav] = useState(true);
    const handleSideNavBar = () => {
        setMaxNav(!maxNav);
    }

    const UICtx = useContext(UIContext);
    const closSideNav = () => {
        UICtx.handleSideMenu();
    }

    return (
        <div className={`${!maxNav ? 'minimize-side-nav-bar' : ''} 
        ${UICtx.sideMenuStatus ? '' : 'hide-nav-bar'} 
        sidenavbar`}
        >
            <div className="close-nav" onClick={handleSideNavBar}>
                {maxNav && <CloseIcon />}
                {!maxNav && <KeyboardArrowRightIcon />}
            </div>

            {!maxNav &&
                <div className="hide-nav-icon" onClick={closSideNav}>
                    {<ArrowCircleLeftIcon className='arrow-icon-left' />}
                </div>
            }
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
        </div >
    )
}

export default SideNavBar
