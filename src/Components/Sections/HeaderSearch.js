import React, { useState } from 'react';
import '../Sections/HeaderSearch.css';
import SearchIcon from '@mui/icons-material/Search';
import DropdownButton from '../UI/DropdownButton';

function HeaderSearch() {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <div className='header-search-container'>
            <div className="searchInput">
                <SearchIcon className='project-data-search-icon' />
                <input type="text" className='project-data-search' placeholder='Search here...' />
            </div>

            <div className="search-helper">
                <div className="search-helper-left">
                    <h3>Welcome To OneHome</h3>
                </div>

                <div className="search-helper-right">
                    <h5 className='sort-by'>Sort by : </h5>
                    <DropdownButton open={showDropdown} onClick={toggleDropdown}>{'Newest'}</DropdownButton >
                    {showDropdown && (
                        <div className="dropdown-content">
                            <p>Oldest</p>
                            <p>Date</p>
                            <p>Recent</p>
                        </div>
                    )}

                </div>

            </div>
        </div >
    )
}

export default HeaderSearch
