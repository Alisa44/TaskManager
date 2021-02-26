import axios from 'axios';
import {BASE_URL} from '../constants/api';

export const getTasks = () => {
    return axios({
        url: `${BASE_URL}/?developer=Larysa`,
        method: 'get',
        headers: {'content-type': 'application/json'},
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

export const editTask = (data, token) => {
    return axios({
        url: `${BASE_URL}/edit/:id?developer=Larysa`,
        method: 'POST',
        headers: { 'content-type': 'multipart/form-data'},
        data,
        params: {token}
    });
};

export const login = (data) => {
    return axios({
        url: `${BASE_URL}/login?developer=Larysa`,
        method: 'POST',
        headers: { 'content-type': 'multipart/form-data'},
        data,
    });
};