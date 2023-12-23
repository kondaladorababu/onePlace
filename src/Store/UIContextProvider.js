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

    const closeModal = () => {
        setModalType('');
    }

    const UIContextValue = {
        sideMenuStatus: openSideMenu,
        handleSideMenu,
        modalType: modalType,
        handleNewSprintModal,
        closeModal,
    }

    return (
        < UIContext.Provider value={UIContextValue}>
            {props.children}
        </UIContext.Provider>
    )

}

export default UIContext;