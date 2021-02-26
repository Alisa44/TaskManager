import axios from 'axios';
import {BASE_URL} from '../constants/api';

export const getTasks = (sortField, sortDirection, page) => {
    const params = {developer: 'Larysa', sort_field: sortField, sort_direction: sortDirection, page};
    return axios({
        url: `${BASE_URL}/`,
        method: 'get',
        headers: {'content-type': 'application/json'},
        params,
    });
};

export const createTask = data => {
    return axios({
        url: `${BASE_URL}/create?developer=Larysa`,
        method: 'POST',
        headers: { 'content-type': 'multipart/form-data'},
        data
    });
};

export const editTask = (taskId, data) => {
    return axios({
        url: `${BASE_URL}/edit/${taskId}?developer=Larysa`,
        method: 'POST',
        headers: { 'content-type': 'multipart/form-data'},
        data,
    });
};

export const loginAdmin = (data) => {
    return axios({
        url: `${BASE_URL}/login?developer=Larysa`,
        method: 'POST',
        headers: { 'content-type': 'multipart/form-data'},
        data,
    });
};