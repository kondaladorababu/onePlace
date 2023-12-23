import React, { useEffect, useRef } from 'react';
import '../Modals/Modal.css';
import { createPortal } from 'react-dom';

function Modal({ open, children }) {
    const dialog = useRef();

    useEffect(() => {
        const modal = dialog.current;

        if (open) {
            modal.showModal();
        }
        return () => modal.close();
    }, [open]);

    return createPortal(
        <dialog ref={dialog} className={`modal`}>
            {children}
        </dialog>,
        document.getElementById("modal")
    )
}

export default Modal
