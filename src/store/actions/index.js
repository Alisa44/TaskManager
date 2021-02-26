import {ACTIONS} from './types';
import {createTask, editTask, getTasks, loginAdmin} from '../../utils';
import {notification} from 'antd';

export const setTasks = data => ({
    type: ACTIONS.SET_TASKS,
    payload: data
});

export const setLoginFormOpen = flag => ({
    type: ACTIONS.SET_LOGIN_FORM_OPEN,
    payload: flag
});

export const setTaskFormOpen = flag => ({
    type: ACTIONS.SET_TASK_FORM_OPEN,
    payload: flag
});

export const setTotal = total => ({
    type: ACTIONS.SET_TOTAL,
    payload: total
});

export const setCurrentPage = number => ({
    type: ACTIONS.SET_CURRENT_PAGE,
    payload: number
});

export const setSortField = field => ({
    type: ACTIONS.SET_SORT_FIELD,
    payload: field
});

export const setSortDirection = direction => ({
    type: ACTIONS.SET_SORT_DIRECTION,
    payload: direction
});

export const setUserMessage = message => ({
    type: ACTIONS.SET_USER_MESSAGE,
    payload: message
});

export const setUserToken = token => () => {
    localStorage.setItem('token', token);
};

export const setIsAdmin = flag => ({
    type: ACTIONS.SET_IS_ADMIN,
    payload: flag
});

export const setCurrentTask = task => ({
    type: ACTIONS.SET_CURRENT_TASK,
    payload: task
});

export const getTasksList = (sortField = '', sortDirection = '', page = 1) => dispatch => {
    getTasks(sortField, sortDirection, page)
        .then(result => {
            if (result?.data?.status === 'ok' && result.data.message?.tasks) {
                dispatch(setTasks(result.data.message.tasks));
                dispatch(setTotal(result.data.message.total_task_count));
            }
        }).catch(e => {
        console.log('get tasks error happened', e);
    });
};

export const updateTasksList = () => (dispatch, getState) => {
    const {sortField, sortDirection, page} = getState().state;
    dispatch(setTaskFormOpen(false));
    dispatch(getTasksList(sortField, sortDirection, page));
    dispatch(setUserMessage(null));
};

export const login = (username, password) => dispatch => {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    loginAdmin(formData)
        .then(result => {
            if (result?.data?.status === 'error') {
                dispatch(setUserMessage(result.data.message));
            } else {
                dispatch(setIsAdmin(true));
                dispatch(setUserToken(result.data.message.token));
                dispatch(setLoginFormOpen(false));
                dispatch(setUserMessage(null));
            }
        }).catch(e => {
        console.log('login failed', e);
    });
};

export const createNewTask = (data) => (dispatch) => {
    const {username, email, text} = data;
    const formData = new FormData();
    const encodedText = text.replaceAll(/<>/g, '');

    formData.append('username', username);
    formData.append('email', email);
    formData.append('text', encodedText);

    createTask(formData)
        .then(result => {
            if (result?.data?.status === 'ok') {
                dispatch(setCurrentTask(null));
                dispatch(updateTasksList());
                notification.success({message: 'New Task Created!', duration: 2});
            } else if (result?.data?.status === 'error') {
                dispatch(setUserMessage(result.data.message));
            }
        }).catch(e => {
        console.log('create new task error', e);
    });
};

export const editCurrentTask = data => (dispatch) => {
    const {status, text, id} = data;
    const token = localStorage.getItem('token');
    const formData = new FormData();
    
    if (text?.length) {
        const encodedText = text.replaceAll(/<>/g, '');
        formData.append('text', encodedText);
        formData.append('status', status);
    }
    
    status && formData.append('status', status);
    formData.append('token', token);

    editTask(id, formData, token)
        .then(result => {
            if (result?.data?.status === 'ok') {
                dispatch(setCurrentTask(null));
                dispatch(updateTasksList());
                notification.success({message: 'Task Successfully Updated!', duration: 2});
            } else if (result?.data?.status === 'error' && result.data.message.token) {
                notification.error({message: 'Task was not edited. Log in, please', duration: 2});
            }
        }).catch(e => {
        console.log('edit task error happened', e);
    });
};