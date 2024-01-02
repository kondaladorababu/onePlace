import { createContext, useState } from "react";

const UIContext = createContext({
    sideMenuStatus: false,
    modalType: '',
});

export function UIContextProvider(props) {
    const [openSideMenu, setOpenSideMenu] = useState(false);
    const [modalType, setModalType] = useState('');

    const handleSideMenu = () => {
        setOpenSideMenu(!openSideMenu);
    }

    const handleNewSprintModal = () => {
        setModalType('newSprint');
    }

    const handleEditSprintModal = () => {
        setModalType('editSprint');
    }

    const handleNewSprintAddedModal = () => {
        setModalType('addedSuccesfully');
    }

    const ShowDeleteWarningModal = () => {
        setModalType('DeleteWarningModal');
    }

    const handleSprintDeletedModal = () => {
        setModalType('deletedSuccesfully');
    }

    const handleSprintUpdatedModal = () => {
        setModalType('updatedSuccesfully');
    }

    const closeModal = () => {
        setModalType('');
    }

    const UIContextValue = {
        sideMenuStatus: openSideMenu,
        handleSideMenu,
        modalType: modalType,
        handleNewSprintModal,
        closeModal,
        handleEditSprintModal,
        handleNewSprintAddedModal,
        handleSprintDeletedModal,
        ShowDeleteWarningModal,
        handleSprintUpdatedModal
    }

    return (
        < UIContext.Provider value={UIContextValue}>
            {props.children}
        </UIContext.Provider>
    )

}

export default UIContext;