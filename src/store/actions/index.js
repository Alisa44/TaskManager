import {ACTIONS} from './types';
import {getTasks} from '../../utils';

export const setTasks = data => ({
    type: ACTIONS.SET_TASKS,
    payload: data
});

export const setLoginFormOpen = flag => ({
    type: ACTIONS.SET_LOGIN_FORM_OPEN,
    payload: flag
});

export const setTaskFormOpen = flag => ({
    type: ACTIONS.SET_LOGIN_FORM_OPEN,
    payload: flag
});

export const getTasksList = () => dispatch => {
    getTasks()
        .then(result => {
            console.log(result);
            if (result?.data?.status === 'ok' && result.data.message?.tasks) {
                dispatch(setTasks(result.data.message.tasks));
            }
        }).catch(e => {
        console.log('get tasks error happened', e);
    });
};
