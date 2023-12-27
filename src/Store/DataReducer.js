const item1 = {
    id: 1,
    sprintVersion: '4.16.0',
    sprintStartDate: 'dec/12/23',
    sprintEndDate: 'dec/22/23',
    sprintTeamName: 'Pheonix',
    sprintStatus: 'In-Progress'
}
const item2 = {
    id: 2,
    sprintVersion: '4.15.0',
    sprintStartDate: 'dec/12/23',
    sprintEndDate: 'dec/22/23',
    sprintTeamName: 'Dragon',
    sprintStatus: 'Not Started'
}
const item3 = {
    id: 3,
    sprintVersion: '4.14.0',
    sprintStartDate: 'dec/12/23',
    sprintEndDate: 'dec/22/23',
    sprintTeamName: 'pheonix',
    sprintStatus: 'Completed',
}
const item4 = {
    id: 4,
    sprintVersion: '4.13.0',
    sprintStartDate: 'dec/12/23',
    sprintEndDate: 'dec/22/23',
    sprintTeamName: 'Dragon',
    sprintStatus: 'Completed',
}

export const initialData = {
    sprintItems: [item1, item2, item3, item4],
}

function reducer(state, action) {

    switch (action.type) {
        case 'ADD_NEW_SPRINT_ITEM':
            const existingSprintItems = state.sprintItems;
            const updatedSprintItems = [action.item, ...existingSprintItems]

            return {
                ...state,
                sprintItems: updatedSprintItems,
            }
        case 'DELETE_SPRINT_ITEM':
            const totalSprintItems = state.sprintItems;
            const updatedSprintItems2 = totalSprintItems.filter((sprintItem) => (
                sprintItem.id !== action.id
            ))

            return {
                ...state,
                sprintItems: updatedSprintItems2,
            }
        case 'MODIFY_SPRINT_ITEM':
            const updatedItem = action.item;

            const updatedSprintItems3 = state.sprintItems.map(item => {
                if (item.id === action.item.id) {
                    return updatedItem;
                }
                return item;
            });

            return {
                ...state,
                sprintItems: updatedSprintItems3
            }
        case 'FIND_CURRENT_ITEM_DETAILS':
            const id = action.id;

            const currentEditingItemDetails = state.sprintItems.find((item) => (
                item.id === id
            ));

            return {
                ...state,
                CurrentItemDetails: currentEditingItemDetails
            }
        default:
            return state;
    }

}

export default reducer;