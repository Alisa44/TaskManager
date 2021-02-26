import {ACTIONS} from '../actions/types';

const initialState = {
    tasks: [],
    isTaskFormOpen: false,
    isLogInFormOpen: false,
};

export const reducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case ACTIONS.SET_TASKS:
            return {...state, tasks: payload};

        case ACTIONS.SET_LOGIN_FORM_OPEN:
            return {...state, isLogInFormOpen: payload};

        case ACTIONS.SET_TASK_FORM_OPEN:
            return {...state, isTaskFormOpen: payload};

        default:
            return state;
    }
};