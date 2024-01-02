import React, { useContext, useState } from 'react';
import '../Modals/NewSprintModal.css';
import Modal from './Modal'
import UIContext from '../../Store/UIContextProvider';
import Button from '../UI/Button';
import DropdownButton from '../UI/DropdownButton'
import Input from '../UI/Input';
import { DataContext } from '../../Store/DataContextProvider';

function NewSprintModal() {
    const UICtx = useContext(UIContext);
    const DataCtx = useContext(DataContext);
    const { addNewSprintItem } = DataCtx;

    const [showDropdown, setshowDropdown] = useState(false);

    const [newSprintData, setNewSprintData] = useState({
        id: Math.random(),
        sprintVersion: '',
        sprintStartDate: '',
        sprintEndDate: '',
        sprintTeamName: '',
        sprintStatus: 'Not Started'
    });

    const [didEdit, setDidEdit] = useState({
        sprintVersion: false,
        sprintStartDate: false,
        sprintEndDate: false,
        sprintTeamName: false,
    });

    const [touchedFields, setTouchedFields] = useState({
        sprintVersion: true,
        sprintStartDate: true,
        sprintEndDate: true,
        sprintTeamName: true,
        sprintStatus: true,
    });

    const sprintVersionNotValid = didEdit.sprintVersion && newSprintData.sprintVersion === '';
    const sprintStartDateNotValid = didEdit.sprintStartDate && newSprintData.sprintStartDate === '';
    const sprintEndDateNotValid = didEdit.sprintEndDate && newSprintData.sprintEndDate === '';
    const sprintTeamNameNotValid = didEdit.sprintTeamName && newSprintData.sprintTeamName === '';


    function handleInputChange(e) {
        // Prevent changes to sprintStatus
        const { id, value } = e.target;
        if (id !== 'sprintStatus') {
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
            sprintVersion,
            sprintStartDate,
            sprintEndDate,
            sprintTeamName,
        } = newSprintData;

        const isDataValid =
            sprintVersion.trim() !== '' &&
            sprintStartDate.trim() !== '' &&
            sprintEndDate.trim() !== '' &&
            sprintTeamName.trim() !== '';

        if (isDataValid) {
            addNewSprintItem(newSprintData);

            //clear the form & onBlur statuses
            setNewSprintData({
                id: '',
                sprintVersion: '',
                sprintStartDate: '',
                sprintEndDate: '',
                sprintTeamName: '',
            });

            setDidEdit({
                sprintVersion: false,
                sprintStartDate: false,
                sprintEndDate: false,
                sprintTeamName: false,
            });

            UICtx.handleNewSprintAddedModal();
        } else {
            if (didEdit.sprintVersion === false) {
                const id = 'sprintVersion';
                setTouchedFields(prevFields => ({
                    ...prevFields,
                    [id]: false,
                }));
            }
            else if (didEdit.sprintStartDate === false) {
                const id = 'sprintStartDate';
                setTouchedFields(prevFields => ({
                    ...prevFields,
                    [id]: false,
                }));
            } else if (didEdit.sprintEndDate === false) {
                const id = 'sprintEndDate';
                setTouchedFields(prevFields => ({
                    ...prevFields,
                    [id]: false,
                }));
            } else if (didEdit.sprintTeamName === false) {
                const id = 'sprintTeamName';
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
        const id = 'sprintStatus'
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
                        <Input label={"New Sprint Version"} type={"text"} id={"sprintVersion"} value={newSprintData.sprintVersion} onChange={handleInputChange} onBlur={handleInputBlur} />
                        <div className="control-error">{(sprintVersionNotValid || !touchedFields.sprintVersion) && <p>Please Enter Sprint Version</p>}</div>
                    </div>

                    <div className="new-sprint-duration">
                        <div className="sprint-start-date">
                            <Input label={"Sprint Start Date"} type={"text"} id={"sprintStartDate"} value={newSprintData.sprintStartDate} onChange={handleInputChange} onBlur={handleInputBlur} />
                            <div className="control-error">{(sprintStartDateNotValid || !touchedFields.sprintStartDate) && <p>Please Enter Sprint Start Date</p>}</div>
                        </div>

                        <div className="sprint-end-date">
                            <Input label={"Sprint End Date"} type={"text"} id={"sprintEndDate"} value={newSprintData.sprintEndDate} onChange={handleInputChange} onBlur={handleInputBlur} />
                            <div className="control-error">{(sprintEndDateNotValid || !touchedFields.sprintEndDate) && <p>Please Enter Sprint End Date</p>}</div>
                        </div>
                    </div>

                    <div className="new-sprint-team-name">
                        <Input label={"New Sprint Team Name"} type={"text"} id={"sprintTeamName"} value={newSprintData.sprintTeamName} onChange={handleInputChange} onBlur={handleInputBlur} />
                        <div className="control-error">{(sprintTeamNameNotValid || !touchedFields.sprintTeamName) && <p>Please Enter Sprint Team Name</p>}</div>
                    </div>

                    <div className="new-sprint-status">
                        <Input
                            label={"Sprint Status"}
                            type={"text"}
                            id={"sprintStatus"}
                            value={newSprintData.sprintStatus}
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
                    <Button status={'new'} onClick={handleClose}>{'Close'}</Button>
                    <Button status={'Completed'} onClick={handleSubmit} >{'Submit'}</Button>
                </div>
            </form>
        </Modal >
    )
}

export default NewSprintModal
