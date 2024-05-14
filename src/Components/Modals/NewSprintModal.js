import React, { useContext, useState } from 'react';
import '../Modals/NewSprintModal.css';
import Modal from './Modal'
import UIContext from '../../Store/UIContextProvider';
import Button from '../UI/Button';
import DropdownButton from '../UI/DropdownButton'
import Input from '../UI/Input';
import { DataContext } from '../../Store/DataContextProvider';
import axios from 'axios';
import API from '../../Store/api';

function NewSprintModal() {
    const UICtx = useContext(UIContext);
    const DataCtx = useContext(DataContext);
    const { addNewSprintItem } = DataCtx;

    const [showDropdown, setshowDropdown] = useState(false);

    const [isCreating, setIsCreating] = useState(false);
    const [error, setError] = useState(false);

    const [newSprintData, setNewSprintData] = useState({
        releaseVersion: '',
        startDate: '',
        endDate: '',
        teamName: '',
        status: 'Not Started'
    });

    const [didEdit, setDidEdit] = useState({
        releaseVersion: false,
        startDate: false,
        endDate: false,
        teamName: false,
    });

    const [touchedFields, setTouchedFields] = useState({
        releaseVersion: true,
        startDate: true,
        endDate: true,
        teamName: true,
        status: true,
    });

    const releaseVersionNotValid = didEdit.releaseVersion && newSprintData.releaseVersion === '';
    const startDateNotValid = didEdit.startDate && newSprintData.startDate === '';
    const endDateNotValid = didEdit.endDate && newSprintData.endDate === '';
    const teamNameNotValid = didEdit.teamName && newSprintData.teamName === '';


    function handleInputChange(e) {
        // Prevent changes to status
        const { id, value } = e.target;
        if (id !== 'status') {
            setNewSprintData(prevData => ({
                ...prevData,
                [id]: value,
            }));
        }
    }

    function handleInputBlur(e) {
        const { id } = e.target;
        setDidEdit(prevEdit => ({
            ...prevEdit,
            [id]: true,
        }));

        setTouchedFields(prevTouch => ({
            ...prevTouch,
            [id]: true,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const {
            releaseVersion,
            startDate,
            endDate,
            teamName,
        } = newSprintData;

        const isDataValid =
            releaseVersion.trim() !== '' &&
            startDate.trim() !== '' &&
            endDate.trim() !== '' &&
            teamName.trim() !== '';

        if (isDataValid) {

            try {
                async function addNewItem() {
                    setIsCreating(true);
                    const response = await axios.post(API.postSprintItem(), newSprintData);

                    if (response.status !== 200) {
                        throw new Error("Error while Adding new Sprint Item");
                    }

                    setIsCreating(false);
                    addNewSprintItem(newSprintData);
                    //clear the form & onBlur statuses
                    setNewSprintData({ releaseVersion: '', startDate: '', endDate: '', teamName: '', });
                    setDidEdit({ releaseVersion: false, startDate: false, endDate: false, teamName: false, });

                    UICtx.handleNewSprintAddedModal();
                }

                addNewItem();

            } catch (error) {
                setError(true);
                setIsCreating(false);
            }

        } else {
            if (didEdit.releaseVersion === false) {
                const id = 'releaseVersion';
                setTouchedFields(prevFields => ({
                    ...prevFields,
                    [id]: false,
                }));
            }
            else if (didEdit.startDate === false) {
                const id = 'startDate';
                setTouchedFields(prevFields => ({
                    ...prevFields,
                    [id]: false,
                }));
            } else if (didEdit.endDate === false) {
                const id = 'endDate';
                setTouchedFields(prevFields => ({
                    ...prevFields,
                    [id]: false,
                }));
            } else if (didEdit.teamName === false) {
                const id = 'teamName';
                setTouchedFields(prevFields => ({
                    ...prevFields,
                    [id]: false,
                }));
            }
        }
    }

    const handleClose = (e) => {
        e.preventDefault();
        UICtx.closeModal();
    }

    const updateStatus = (value) => {
        const id = 'status'
        setNewSprintData(prevData => ({
            ...prevData,
            [id]: value,
        }));
        setshowDropdown(!showDropdown)
    }

    return (
        <Modal open={UICtx.modalType === 'newSprint'}>
            <form >
                <h3 className='new-sprint-heading'>Add a New Sprint</h3>

                <div className="new-sprint-content">
                    <div className="new-sprint-version">
                        <Input label={"New Sprint Version"} type={"text"} id={"releaseVersion"} placeholder="Ex:- 1.10.0"
                            value={newSprintData.releaseVersion}
                            onChange={handleInputChange}
                            onBlur={handleInputBlur} />
                        <div className="control-error">{(releaseVersionNotValid || !touchedFields.releaseVersion) && <p>Please Enter Sprint Version</p>}</div>
                    </div>

                    <div className="new-sprint-duration">
                        <div className="sprint-start-date">
                            <Input label={"Sprint Start Date"} type={"text"} id={"startDate"} placeholder="Ex:-DD/MM/YYYY"
                                value={newSprintData.startDate}
                                onChange={handleInputChange}
                                onBlur={handleInputBlur} />
                            <div className="control-error">{(startDateNotValid || !touchedFields.startDate) && <p>Please Enter Sprint Start Date</p>}</div>
                        </div>

                        <div className="sprint-end-date">
                            <Input label={"Sprint End Date"} type={"text"} id={"endDate"} placeholder="Ex:-DD/MM/YYYY"
                                value={newSprintData.endDate}
                                onChange={handleInputChange}
                                onBlur={handleInputBlur} />
                            <div className="control-error">{(endDateNotValid || !touchedFields.endDate) && <p>Please Enter Sprint End Date</p>}</div>
                        </div>
                    </div>

                    <div className="new-sprint-team-name">
                        <Input label={"New Sprint Team Name"} type={"text"} id={"teamName"}
                            value={newSprintData.teamName}
                            onChange={handleInputChange}
                            onBlur={handleInputBlur} />
                        <div className="control-error">{(teamNameNotValid || !touchedFields.teamName) && <p>Please Enter Sprint Team Name</p>}</div>
                    </div>

                    <div className="new-sprint-status">
                        <Input
                            label={"Sprint Status"}
                            type={"text"}
                            id={"status"}
                            value={newSprintData.status}
                            readOnly />

                        <DropdownButton
                            className='status-dropdown'
                            open={showDropdown}
                            onClick={() => { setshowDropdown(!showDropdown) }}>
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
                    {isCreating && (
                        <span>Adding New Sprint Item....</span>
                    )}

                    {!isCreating && !error && (
                        <>
                            <Button status={'new'} onClick={handleClose}>{'Close'}</Button>
                            <Button status={'Completed'} onClick={handleSubmit} >{'Submit'}</Button>
                        </>
                    )}

                    {error && (
                        <span>Error while Adding New Sprint Item....</span>
                    )}
                </div>
            </form>
        </Modal >
    )
}

export default NewSprintModal
