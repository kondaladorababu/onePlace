export const initialData = {
    sprintItems: [
        {
            id: 12,
            releaseVersion: "42.25.0",
            startDate: "23/12/24",
            endDate: "34/23/24",
            teamName: "Dragon",
            sprintStatus: "Inprogress"
        },
        {
            id: 13,
            releaseVersion: "43.2.0",
            startDate: "23/12/24",
            endDate: "34/23/24",
            teamName: "Dragon",
            sprintStatus: "Inprogress"
        },
        {
            id: 14,
            releaseVersion: "4.22.0",
            startDate: "23/12/24",
            endDate: "34/23/24",
            teamName: "Dragon",
            sprintStatus: "Inprogress"
        },
        {
            id: 15,
            releaseVersion: "4.22.0",
            startDate: "23/12/24",
            endDate: "34/23/24",
            teamName: "Dragon",
            sprintStatus: "Not Started"
        },
        {
            id: 16,
            releaseVersion: "4.22.0",
            startDate: "23/12/24",
            endDate: "34/23/24",
            teamName: "Dragon",
            sprintStatus: "Completed"
        }
    ]
};


function reducer(state, action) {

    switch (action.type) {
        case 'SET_SPRINT_ITEMS':

            return {
                ...state,
                sprintItems: action.items,
            }
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