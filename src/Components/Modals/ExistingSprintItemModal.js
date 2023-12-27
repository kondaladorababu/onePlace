import React, { useContext, useEffect, useState } from 'react';
import UIContext from '../../Store/UIContextProvider';
import { DataContext } from '../../Store/DataContextProvider';
import Modal from '../Modals/Modal.js'
import Button from '../UI/Button';
import Input from '../UI/Input';

function ExistingSprintItemModal() {
    const UICtx = useContext(UIContext);

    const DataCtx = useContext(DataContext);
    const { editSprintItem, CurrentItemDetails } = DataCtx;

    const [currentSprintData, setcurrentSprintData] = useState({
        id: '',
        sprintVersion: '',
        sprintStartDate: '',
        sprintEndDate: '',
        sprintTeamName: '',
        sprintStatus: ''
    });

    useEffect(() => {
        if (CurrentItemDetails && Object.keys(CurrentItemDetails).length > 0) {
            setcurrentSprintData(CurrentItemDetails);
        }
    }, [CurrentItemDetails]);


    const [didEdit, setDidEdit] = useState({
        sprintVersion: false,
        sprintStartDate: false,
        sprintEndDate: false,
        sprintTeamName: false,
        sprintStatus: false,
    });

    const sprintVersionNotValid = didEdit.sprintVersion && currentSprintData.sprintVersion === '';
    const sprintStartDateNotValid = didEdit.sprintStartDate && currentSprintData.sprintStartDate === '';
    const sprintEndDateNotValid = didEdit.sprintEndDate && currentSprintData.sprintEndDate === '';
    const sprintTeamNameNotValid = didEdit.sprintTeamName && currentSprintData.sprintTeamName === '';
    const sprintStatusNotValid = didEdit.sprintStatus && currentSprintData.sprintStatus === '';

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

    const handleSubmit = (e) => {
        e.preventDefault();
        const {
            sprintVersion,
            sprintStartDate,
            sprintEndDate,
            sprintTeamName,
            sprintStatus
        } = currentSprintData;

        const isDataValid =
            sprintVersion.trim() !== '' &&
            sprintStartDate.trim() !== '' &&
            sprintEndDate.trim() !== '' &&
            sprintTeamName.trim() !== '' &&
            sprintStatus.trim() !== '';

        if (isDataValid) {
            editSprintItem(currentSprintData);
            UICtx.closeModal();
        } else {
            return;
        }
    }

    const handleClose = (e) => {
        e.preventDefault();
        UICtx.closeModal();
    }


    return (
        <Modal open={UICtx.modalType === 'editSprint'}>
            <form >
                <h3 className='new-sprint-heading'>Edit Sprint</h3>

                <div className="new-sprint-content">
                    <div className="new-sprint-version">
                        <Input label={"New Sprint Version"} type={"text"} id={"sprintVersion"} value={currentSprintData.sprintVersion} onChange={handleInputChange} onBlur={handleInputBlur} />
                        <div className="control-error">{(sprintVersionNotValid) && <p>Please Enter Sprint Version</p>}</div>
                    </div>

                    <div className="new-sprint-duration">
                        <div className="sprint-start-date">
                            <Input label={"Sprint Start Date"} type={"text"} id={"sprintStartDate"} value={currentSprintData.sprintStartDate} onChange={handleInputChange} onBlur={handleInputBlur} />
                            <div className="control-error">{(sprintStartDateNotValid) && <p>Please Enter Sprint Start Date</p>}</div>
                        </div>

                        <div className="sprint-end-date">
                            <Input label={"Sprint End Date"} type={"text"} id={"sprintEndDate"} value={currentSprintData.sprintEndDate} onChange={handleInputChange} onBlur={handleInputBlur} />
                            <div className="control-error">{(sprintEndDateNotValid) && <p>Please Enter Sprint End Date</p>}</div>
                        </div>
                    </div>

                    <div className="new-sprint-team-name">
                        <Input label={"New Sprint Team Name"} type={"text"} id={"sprintTeamName"} value={currentSprintData.sprintTeamName} onChange={handleInputChange} onBlur={handleInputBlur} />
                        <div className="control-error">{(sprintTeamNameNotValid) && <p>Please Enter Sprint Team Name</p>}</div>

                        <Input label={"Sprint Status"} type={"text"} id={"sprintStatus"} value={currentSprintData.sprintStatus} onChange={handleInputChange} onBlur={handleInputBlur} />
                        <div className="control-error">{(sprintStatusNotValid) && <p>Please Select a Valid Sprint Status</p>}</div>

                    </div>
                </div>

                <div className="control-row">
                    <Button status={'new'} onClick={handleClose}>{'Close'}</Button>
                    <Button status={'Completed'} onClick={handleSubmit} >{'Submit Changes'}</Button>
                </div>
            </form>
        </Modal >
    )
}

export default ExistingSprintItemModal
