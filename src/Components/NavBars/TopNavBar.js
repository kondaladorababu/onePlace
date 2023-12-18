import '../NavBars/TopNavBar.css';
import SearchIcon from '@mui/icons-material/Search';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { useContext, useState } from 'react';
import UIContext from '../../Store/UIContextProvider';

function TopNavBar() {
    const UICtx = useContext(UIContext);

    const sideMenuHandler = () => {
        UICtx.handleSideMenu();
    }

    return (
        <div className="top-nav-bar">
            <div className="left">
                <MenuIcon className='menu-icon' onClick={sideMenuHandler} />
                <HomeOutlinedIcon className='logo-icon' />
                <h2 className='logo-name'>OnePlace</h2>
            </div>

            <div className="right">
                <input type="text" className='search-bar' placeholder='Search Your team Here...' />
                <SearchIcon className='search-icon' />
            </div>
        </div>
    )
}

export default TopNavBar
