
const BASE_URL = 'http://localhost:8080/api';

const API = {
    getSprintItems: () => `${BASE_URL}/sprintItems`,
    deleteSprintItem: (id) => `${BASE_URL}/deleteSprintItem/${id}`,
    updateSprintItem: () => `${BASE_URL}/updateSprintItem`,
};

export default API;
