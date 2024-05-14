import React, { useContext, useEffect, useState } from 'react';
import UIContext from '../../Store/UIContextProvider';
import { DataContext } from '../../Store/DataContextProvider';
import Modal from '../Modals/Modal.js'
import Button from '../UI/Button';
import Input from '../UI/Input';
import DropdownButton from '../UI/DropdownButton.js';
import API from '../../Store/api.js';
import axios from 'axios';

function ExistingSprintItemModal() {
    const UICtx = useContext(UIContext);

    const DataCtx = useContext(DataContext);
    const { updateSprintItem, CurrentItemDetails } = DataCtx;

    const [showDropdown, setShowDropdown] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);
    const [error, setError] = useState(false);


    const [currentSprintData, setcurrentSprintData] = useState({
        id: '',
        releaseVersion: '',
        startDate: '',
        endDate: '',
        teamName: '',
        status: ''
    });

    useEffect(() => {
        if (CurrentItemDetails && Object.keys(CurrentItemDetails).length > 0) {
            setcurrentSprintData(CurrentItemDetails);
        }
    }, [CurrentItemDetails]);


    const [didEdit, setDidEdit] = useState({
        releaseVersion: false,
        startDate: false,
        endDate: false,
        teamName: false,
        status: false,
    });

    const releaseVersionNotValid = didEdit.releaseVersion && currentSprintData.releaseVersion === '';
    const startDateNotValid = didEdit.startDate && currentSprintData.startDate === '';
    const endDateNotValid = didEdit.endDate && currentSprintData.endDate === '';
    const teamNameNotValid = didEdit.teamName && currentSprintData.teamName === '';

    function handleInputChange(e) {
        const { id, value } = e.target;
        setcurrentSprintData(prevData => ({
            ...prevData,
            [id]: value,
        }));
    }

    function handleInputBlur(e) {
        const { id } = e.target;
        setDidEdit(prevEdit => ({
            ...prevEdit,
            [id]: true,
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {
            releaseVersion,
            startDate,
            endDate,
            teamName,
            status
        } = currentSprintData;

        const isDataValid =
            releaseVersion.trim() !== '' &&
            startDate.trim() !== '' &&
            endDate.trim() !== '' &&
            teamName.trim() !== '' &&
            status.trim() !== '';

        if (isDataValid) {

            try {
                setIsUpdating(true);

                const response = await axios.put(API.updateSprintItem(), currentSprintData);
                if (response.status !== 200) {
                    throw new Error("Error in Updating Sprint Item");
                }

                setIsUpdating(false);
                
                updateSprintItem(currentSprintData);
                UICtx.handleSprintUpdatedModal();
            } catch (error) {
                setError(true);
                setIsUpdating(false);
            }

        } else {
            return;
        }
    }

    const handleClose = (e) => {
        e.preventDefault();
        UICtx.closeModal();
    }

    const updateStatus = (value) => {
        const id = 'status'
        setcurrentSprintData(prevData => ({
            ...prevData,
            [id]: value,
        }));
        setShowDropdown(!showDropdown)
    }


    return (
        <Modal open={UICtx.modalType === 'editSprint'}>
            <form >
                <h3 className='new-sprint-heading'>Edit Sprint</h3>

                <div className="new-sprint-content">
                    <div className="new-sprint-version">
                        <Input label={"New Sprint Version"} type={"text"} id={"releaseVersion"}
                            value={currentSprintData.releaseVersion}
                            onChange={handleInputChange}
                            onBlur={handleInputBlur} />
                        <div className="control-error">{(releaseVersionNotValid) && <p>Please Enter Sprint Version</p>}</div>
                    </div>

                    <div className="new-sprint-duration">
                        <div className="sprint-start-date">
                            <Input label={"Sprint Start Date"} type={"text"} id={"startDate"}
                                value={currentSprintData.startDate}
                                onChange={handleInputChange}
                                onBlur={handleInputBlur} />
                            <div className="control-error">{(startDateNotValid) && <p>Please Enter Sprint Start Date</p>}</div>
                        </div>

                        <div className="sprint-end-date">
                            <Input label={"Sprint End Date"} type={"text"} id={"endDate"}
                                value={currentSprintData.endDate}
                                onChange={handleInputChange}
                                onBlur={handleInputBlur} />
                            <div className="control-error">{(endDateNotValid) && <p>Please Enter Sprint End Date</p>}</div>
                        </div>
                    </div>

                    <div className="new-sprint-team-name">
                        <Input label={"New Sprint Team Name"} type={"text"} id={"teamName"}
                            value={currentSprintData.teamName}
                            onChange={handleInputChange}
                            onBlur={handleInputBlur} />
                        <div className="control-error">{(teamNameNotValid) && <p>Please Enter Sprint Team Name</p>}</div>
                    </div>

                    <div className="new-sprint-status">
                        <Input
                            label={"Sprint Status"}
                            type={"text"}
                            id={"status"}
                            value={currentSprintData.status}
                            readOnly />

                        <DropdownButton
                            className='status-dropdown'
                            open={showDropdown}
                            onClick={() => { setShowDropdown(!showDropdown) }}>
                        </DropdownButton>
                        {showDropdown && (
                            <div className="status-dropdown-content">
                                <p onClick={() => { updateStatus('Not Started') }}>Not Started</p>
                                <p onClick={() => { updateStatus('In-Progress') }}>In-Progress</p>
                                <p onClick={() => { updateStatus('Completed') }}>Completed</p>
                            </div>
                        )}
                    </div>
                </div>

                <div className="control-row">
                    {isUpdating && (
                        <span>Updating...</span>
                    )}

                    {error && (
                        <span>Something Went Wrong Pease Try Again...</span>
                    )}

                    {!isUpdating && !error && (
                        <>
                            <Button status={'new'} onClick={handleClose}>{'Close'}</Button>
                            <Button status={'Completed'} onClick={handleSubmit} >{'Submit Changes'}</Button>
                        </>
                    )}

                </div>
            </form>
        </Modal >
    )
}

export default ExistingSprintItemModal
