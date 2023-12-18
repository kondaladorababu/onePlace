import { createContext, useState } from "react";

const UIContext = createContext({
    sideMenuStatus: false,
});

export function UIContextProvider(props) {
    const [openSideMenu, setOpenSideMenu] = useState(false);

    const handleSideMenu = () => {
        setOpenSideMenu(!openSideMenu);
    }

    const UIContextValue = {
        sideMenuStatus: openSideMenu,
        handleSideMenu,
    }

    return (
        < UIContext.Provider value={UIContextValue}>
            {props.children}
        </UIContext.Provider>
    )

}

export default UIContext;