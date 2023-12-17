import React, { useState } from 'react';
import '../Items/SprintItem.css';
import Button from '../UI/Button';
import DropdownButton from '../UI/DropdownButton';

function SprintItem() {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <div className='sprint-item-container'>
            <div className="sprint-item-left">
                <h3 className='sprint-name'>R : 4.14.0</h3>
                <div className="sprint-duration">
                    <h4 className='sprint-duration-title'>Duration :-</h4>
                    <div className="sprint-duration-time">
                        <p className='sprint-start-date'>09-12-23</p>
                        <span> to </span>
                        <p className='sprint-end-date'> 17-12-23</p>
                    </div>
                </div>
                <div className="sprint-team">
                    <h4 className='sprint-team-name-heading'>Team Name : </h4>
                    <p className='sprint-team-name'>Phoenix</p>
                </div>
            </div>

            <div className="sprint-item-right">

                <div className="sprint-status">
                    <h5 className='sprint-status-heading'>Status</h5>
                    <DropdownButton open={showDropdown} onClick={toggleDropdown} status={'completed'}>{'completed'} </DropdownButton>
                    {showDropdown && (<div className="status-dropdown-content">
                        <p>Inprogress</p>
                        <p>Not Started</p>
                    </div>)}
                </div>

                <Button status={'edit'}> Edit </Button>
            </div>
        </div>
    )
}

export default SprintItem
