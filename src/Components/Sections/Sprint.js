import React, { useContext, useEffect, useState } from 'react';
import '../Sections/Sprint.css';
import SprintItem from '../Items/SprintItem';
import Button from '../UI/Button';
import UIContext from '../../Store/UIContextProvider';
import { DataContext } from '../../Store/DataContextProvider';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from "react-router-dom";
import ErrorModal from '../Modals/ErrorModal';
import { useFetch } from '../hooks/useFetch.js';
import { fetchSprintItems } from '../../http.js';


function Sprint() {
    const UICtx = useContext(UIContext);
    const DataCtx = useContext(DataContext);
    const { sprintItems, setSprintItems } = DataCtx;

    const [localSprintItems, setLocalSprintItems] = useState(sprintItems);


    useEffect(() => {
        setLocalSprintItems(sprintItems);
    }, [sprintItems]);

    const { isFetching, error, setError, fetchedData } = useFetch(fetchSprintItems, []);

    useEffect(() => {
        setSprintItems(fetchedData);
    }, [fetchedData]);

    const openNewSprintModal = () => {
        UICtx.handleNewSprintModal();
    }

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/');
    };

    const closeErrorModal = () => {
        setError('');
    }


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

            {isFetching && <span>Wait its fetching...</span>}
            {error && <ErrorModal onClose={closeErrorModal} info={'Error Fetching Sprint Items.. Please Try Again Later'} />}


            {
                !isFetching && localSprintItems.map((item, index) => (
                    <SprintItem
                        key={index}
                        id={item.id}
                        sprintVersion={item.releaseVersion}
                        sprintStartDate={item.startDate}
                        sprintEndDate={item.endDate}
                        sprintTeamName={item.teamName}
                        sprintStatus={item.status}
                    />
                ))
            }

            {!isFetching && <Button status={'Completed'}>Load More</Button>}
        </section >
    )
}

export default Sprint;
