import React, { useContext, useState } from 'react';
import '../Modals/NewSprintModal.css';
import Modal from './Modal'
import UIContext from '../../Store/UIContextProvider';
import Button from '../UI/Button';
import Input from '../UI/Input';

function NewSprintModal() {
    const UICtx = useContext(UIContext);

    const [newSprintData, setNewSprintData] = useState({
        sprintVersion: '',
        sprintDuration: '',
        sprintTeamName: ''
    });

    const [didEdit, setDidEdit] = useState({
        sprintVersion: false,
        sprintDuration: false,
        sprintTeamName: false,
    });

    const sprintVersionNotValid = didEdit.sprintVersion && newSprintData.sprintVersion === '';
    const sprintDurationNotValid = didEdit.sprintDuration && newSprintData.sprintDuration === '';
    const sprintTeamNameNotValid = didEdit.sprintTeamName && newSprintData.sprintTeamName === '';

    function handleInputChange(e) {
        const { id, value } = e.target;
        setNewSprintData(prevData => ({
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
        UICtx.closeModal();
    }

    const handleClose = (e) => {
        e.preventDefault();
        UICtx.closeModal();
    }

    return (
        <Modal open={UICtx.modalType === 'newSprint'}>
            <form >
                <h3 className='new-sprint-heading'>Add a New Sprint</h3>

                <div className="new-sprint-content">
                    <div className="new-sprint-version">
                        <Input label={"New Sprint Version"} type={"text"} id={"sprintVersion"} value={newSprintData.sprintVersion} onChange={handleInputChange} onBlur={handleInputBlur} />
                        <div className="control-error">{sprintVersionNotValid && <p>Please Enter Sprint Version</p>}</div>
                    </div>

                    <div className="new-sprint-duration">
                        <Input label={"New Sprint Duration"} type={"text"} id={"sprintDuration"} value={newSprintData.sprintDuration} onChange={handleInputChange} onBlur={handleInputBlur} />
                        <div className="control-error">{sprintDurationNotValid && <p>Please Enter Sprint Version</p>}</div>
                    </div>

                    <div className="new-sprint-team-name">
                        <Input label={"New Sprint Team Name"} type={"text"} id={"sprintTeamName"} value={newSprintData.sprintTeamName} onChange={handleInputChange} onBlur={handleInputBlur} />
                        <div className="control-error">{sprintTeamNameNotValid && <p>Please Enter Sprint Version</p>}</div>
                    </div>
                </div>

                <div className="control-row">
                    <Button status={'new'} onClick={handleClose}>{'Close'}</Button>
                    <Button status={'completed'} onClick={handleSubmit} >{'Submit'}</Button>
                </div>
            </form>
        </Modal >
    )
}

export default NewSprintModal
