
const BASE_URL = 'http://localhost:8080/api';

const API = {
    postSprintItem: () => `${BASE_URL}/addSprintItem`,
    getSprintItems: () => `${BASE_URL}/sprintItems`,
    deleteSprintItem: (id) => `${BASE_URL}/deleteSprintItem/${id}`,
    updateSprintItem: () => `${BASE_URL}/updateSprintItem`,
};

export default API;
