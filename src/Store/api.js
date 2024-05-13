
const BASE_URL = 'http://localhost:8080/api';

const API = {
    getSprintItems: () => `${BASE_URL}/sprintItems`,
    deleteSprintItem: (id) => `${BASE_URL}/deleteSprintItem/${id}`,
    // Add more API endpoints here as needed
};

export default API;
