import {ACTIONS} from '../actions/types';

const initialState = {
    tasks: [],
    isTaskFormOpen: false,
    isLogInFormOpen: false,
    isAdmin: false,
    total: 0,
    currentPage: 1,
    sortDirection: null,
    sortField: null,
    userMessage: null,
    currentTask: null,
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

        case ACTIONS.SET_IS_ADMIN:
            return {...state, isAdmin: payload};
            
        case ACTIONS.SET_TOTAL:
            return {...state, total: payload};

        case ACTIONS.SET_CURRENT_PAGE:
            return {...state, currentPage: payload};

        case ACTIONS.SET_SORT_DIRECTION:
            return {...state, sortDirection: payload};

        case ACTIONS.SET_SORT_FIELD:
            return {...state, sortField: payload};
            
        case ACTIONS.SET_USER_MESSAGE:
            return {...state, userMessage: payload};

        case ACTIONS.SET_CURRENT_TASK:
            return {...state, currentTask: payload};

        default:
            return state;
    }
};