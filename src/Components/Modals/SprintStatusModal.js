import React, { useContext } from 'react'
import Modal from './Modal'
import Button from '../UI/Button'
import UIContext from '../../Store/UIContextProvider';

function SprintStatusModal() {

    const UICtx = useContext(UIContext);
    const { modalType, closeModal } = UICtx;

    const handleClose = () => {
        closeModal();
    }

    return (
        <Modal open={modalType === 'addedSuccesfully' || modalType === 'deletedSuccesfully' || modalType === 'updatedSuccesfully'}>
            {modalType === 'addedSuccesfully' && <h3>Added New Sprint Item Succesfully</h3>}
            {modalType === 'deletedSuccesfully' && <h3>Deleted Sprint Item Succesfully</h3>}
            {modalType === 'updatedSuccesfully' && <h3>Updated Sprint Item Succesfully</h3>}

            <div className="control-row">
                <Button status={'Completed'} onClick={handleClose}>{'Close'}</Button>
            </div>
        </Modal >
    )
}

export default SprintStatusModal;
