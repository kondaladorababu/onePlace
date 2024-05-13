import React, { createContext, useReducer } from 'react';
import reducer, { initialData } from './DataReducer';

export const DataContext = createContext({
    sprintItems: [],
    addNewSprintItem: () => { },
    removeSprintItem: () => { },
    editSprintItem: () => { },
    CurrentItemDetails: {},
    getEditingItemDetails: () => { },
});

function DataContextProvider(props) {
    const [dataState, dispatch] = useReducer(reducer, initialData);

    const setSprintItems = (sprintItems) => {
        dispatch({
            type: 'SET_SPRINT_ITEMS',
            items: sprintItems,
        });
    }

    const addNewSprintItem = (newItem) => {
        dispatch({
            type: 'ADD_NEW_SPRINT_ITEM',
            item: newItem,
        });
    }

    const removeSprintItem = (id) => {
        dispatch({
            type: 'DELETE_SPRINT_ITEM',
            id: id,
        });
    }

    const editSprintItem = (item) => {
        dispatch({
            type: 'MODIFY_SPRINT_ITEM',
            item: item,
        });
    }

    const getEditingItemDetails = (id) => {
        dispatch({
            type: 'FIND_CURRENT_ITEM_DETAILS',
            id: id,
        });
    }

    const DataContextValue = {
        sprintItems: dataState.sprintItems,
        addNewSprintItem,
        removeSprintItem,
        editSprintItem,
        CurrentItemDetails: dataState.CurrentItemDetails,
        getEditingItemDetails,
        setSprintItems,
    }

    return (
        <DataContext.Provider value={DataContextValue}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataContextProvider;
