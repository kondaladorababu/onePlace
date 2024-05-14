import axios from "axios";
import API from "./Store/api";

export async function fetchSprintItems() {
    const response = await axios.get(API.getSprintItems());
    const resData = response.data;

    if (response.status !== 200) {
        throw new Error('Failed to fetch Sprint Items');
    }

    return resData.reverse();
}