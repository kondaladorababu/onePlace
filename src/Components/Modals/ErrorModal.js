import React from 'react';
import '../Modals/ErrorModal.css'

function ErrorModal({ onClose, info }) {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <p>{info}</p>
                <button className='close_modal' onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default ErrorModal