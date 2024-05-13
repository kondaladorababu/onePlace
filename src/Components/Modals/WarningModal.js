import React, { useContext, useState } from 'react';
import '../Modals/NewSprintModal.css';
import Modal from './Modal'
import UIContext from '../../Store/UIContextProvider';
import Button from '../UI/Button';
import { DataContext } from '../../Store/DataContextProvider';
import axios from 'axios';
import API from '../../Store/api.js'

function WarningModal() {
    const UICtx = useContext(UIContext);
    const DataCtx = useContext(DataContext);
    const { CurrentItemDetails, removeSprintItem } = DataCtx;
    const [isDeleting, setisDeleting] = useState(false);
    const [error, setError] = useState(false);

    const handleClose = (e) => {
        e.preventDefault();
        UICtx.closeModal();
    }

    const handleDelete = async () => {
        try {
            setisDeleting(true);

            const response = await axios.delete(API.deleteSprintItem(CurrentItemDetails.id));
            if (response.status !== 200) {
                throw new Error('Failed to Delete Sprint Item');
            }

            // If the DELETE request is successful, remove the sprint item from the store
            removeSprintItem(CurrentItemDetails.id);
            setisDeleting(false);
            setError(false);

            // Trigger the success modal
            UICtx.handleSprintDeletedModal();
        } catch (error) {
            setisDeleting(false);
            setError(true);
        }
    }

    return (
        <Modal open={UICtx.modalType === 'DeleteWarningModal'}>
            <h3>Are You Sure!</h3>

            <div className="control-row">
                {isDeleting && (
                    <span>Deleting...</span>
                )}

                {error === true && (
                    <span>Something Went Wrong. Please try again...</span>
                )}

                {!error && !isDeleting && (
                    <>
                        <Button status={'new'} onClick={handleClose}>{'Close'}</Button>
                        <Button status={'Completed'} onClick={handleDelete}>{'Delete'}</Button>
                    </>
                )}
            </div>

        </Modal >
    )
}

export default WarningModal;
