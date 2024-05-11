import React, { useContext, useEffect, useState } from 'react';
import '../Sections/Sprint.css';
import SprintItem from '../Items/SprintItem';
import Button from '../UI/Button';
import UIContext from '../../Store/UIContextProvider';
import { DataContext } from '../../Store/DataContextProvider';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from "react-router-dom";



function Sprint() {
    const UICtx = useContext(UIContext);
    const DataCtx = useContext(DataContext);
    const { sprintItems } = DataCtx;

    const [localSprintItems, setLocalSprintItems] = useState(sprintItems);

    useEffect(() => {
        setLocalSprintItems(sprintItems);
    }, [sprintItems]);

    const openNewSprintModal = () => {
        UICtx.handleNewSprintModal();
    }

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/');
    };

    return (
        <section className='sprint-container'>
            <div className='back-to-dashboard' onClick={handleNavigate}>
                <KeyboardBackspaceIcon />
                <span>Back to Dashboard</span>
            </div>
            <div className="sprint-header">
                <h4 className='sprint-heading'>Sprint Items:</h4>
                <Button onClick={openNewSprintModal} status={'new'}>Add Sprint</Button>
            </div>

            {
                localSprintItems.map((item) => (
                    <SprintItem
                        key={item.id}
                        id={item.id}
                        sprintVersion={item.sprintVersion}
                        sprintStartDate={item.sprintStartDate}
                        sprintEndDate={item.sprintEndDate}
                        sprintTeamName={item.sprintTeamName}
                        sprintStatus={item.sprintStatus}
                    />
                ))
            }

            <Button status={'Completed'}>Load More</Button>
        </section >
    )
}

export default Sprint
