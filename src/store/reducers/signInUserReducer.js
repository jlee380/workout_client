import {
    SIGN_IN_SUCCESS,
    SIGN_IN_ERROR,
    SIGN_OUT_SUCCESS
} from '../actions/signInUserAction';

const initialState = {
    error: null
};

const signInUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN_SUCCESS:
            return {
                ...state,
                error: null
            };
        case SIGN_IN_ERROR:
            return {
                ...state,
                error: action.error
            };
        case SIGN_OUT_SUCCESS:
            return {
                ...state,
                error: null
            };
        default:
            return {
                ...state
            };
    }
};

export default signInUserReducer;
