import {
    GYM_FETCH_PENDING,
    GYM_FETCH_ERROR,
    GYM_FETCH_SUCCESS
} from 'store/actions/gymAction';

const initialState = {
    gyms: [],
    pending: false,
    error: null
};

const gymReducer = (state = initialState, action) => {
    if (action.type === GYM_FETCH_SUCCESS) {
        return {
            ...state,
            pending: false,
            gyms: action.gyms
        };
    } else if (action.type === GYM_FETCH_PENDING) {
        return {
            ...state,
            pending: true
        };
    } else if (action.type === GYM_FETCH_ERROR) {
        return {
            ...state,
            pending: false,
            error: action.error
        };
    } else {
        return {
            ...state
        };
    }
};

export default gymReducer;
