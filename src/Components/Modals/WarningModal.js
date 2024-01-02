import React, { useContext } from 'react';
import '../Modals/NewSprintModal.css';
import Modal from './Modal'
import UIContext from '../../Store/UIContextProvider';
import Button from '../UI/Button';
import { DataContext } from '../../Store/DataContextProvider';

function WarningModal() {
    const UICtx = useContext(UIContext);
    const DataCtx = useContext(DataContext);
    const { CurrentItemDetails, removeSprintItem } = DataCtx;

    const handleClose = (e) => {
        e.preventDefault();
        UICtx.closeModal();
    }

    const handleDelete = () => {
        removeSprintItem(CurrentItemDetails.id);
        UICtx.handleSprintDeletedModal();
    }

    return (
        <Modal open={UICtx.modalType === 'DeleteWarningModal'}>
            <h3>Are You Sure!</h3>
            <div className="control-row">
                <Button status={'new'} onClick={handleClose}>{'Close'}</Button>
                <Button status={'Completed'} onClick={handleDelete} >{'Delete'}</Button>
            </div>
        </Modal >
    )
}

export default WarningModal;
