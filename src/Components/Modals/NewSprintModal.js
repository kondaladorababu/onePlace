import React, { useContext } from 'react';
import '../Modals/NewSprintModal.css';
import Modal from './Modal'
import UIContext from '../../Store/UIContextProvider';
import Button from '../UI/Button';
import Input from '../UI/Input';

function NewSprintModal() {
    const UICtx = useContext(UIContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        UICtx.closeModal();
    }

    return (
        <Modal open={UICtx.modalType === 'newSprint'}>
            <form>
                <h2 className='new-sprint-heading'>Add a New Sprint</h2>

                <div className="new-sprint-content">
                    <div className="new-sprint-name">
                        <Input label={"New Sprint Version"} type={"text"} id={"name"} />
                    </div>

                    <div className="new-sprint-duration">
                        <Input label={"New Sprint Duration"} type={"text"} id={"name"} />
                    </div>

                    <div className="new-sprint-team-name">
                        <Input label={"New Sprint Team Name"} type={"text"} id={"name"} />
                    </div>
                </div>

                <div className="control-row">
                    <Button status={'new'} onClick={handleSubmit}>{'Close'}</Button>
                    <Button status={'completed'}>{'Submit'}</Button>
                </div>
            </form>

        </Modal >
    )
}

export default NewSprintModal
