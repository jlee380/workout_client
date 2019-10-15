import {
    USER_FETCH_PENDING,
    USER_FETCH_ERROR,
    USER_FETCH_SUCCESS
} from 'store/actions/userAction';

import { USERS_IN_A_GYM } from 'store/actions/selectedGymAction';

const initialState = {
    users: [],
    pending: false,
    error: null
};

const userReducer = (state = initialState, action) => {
    if (action.type === USER_FETCH_SUCCESS) {
        return {
            ...state,
            pending: false,
            users: action.users
        };
    } else if (action.type === USER_FETCH_PENDING) {
        return {
            ...state,
            pending: true
        };
    } else if (action.type === USER_FETCH_ERROR) {
        return {
            ...state,
            pending: false,
            error: action.error
        };
    } else if (action.type === USERS_IN_A_GYM) {
        return {
            ...state,
            users: action.usersInSelectedGym,
            error: action.error
        };
    } else {
        return {
            ...state
        };
    }
};

export default userReducer;
