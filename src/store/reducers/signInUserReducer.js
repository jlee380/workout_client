import { SIGN_IN_SUCCESS, SIGN_IN_ERROR } from '../actions/signInUserAction';

const initialState = {
    error: null
};

const signInUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN_SUCCESS:
            console.log('Logged In');
            return {
                ...state,
                error: null
            };
        case SIGN_IN_ERROR:
            console.log('Logged in fails');
            return {
                ...state,
                error: action.error
            };
        default:
            return {
                ...state
            };
    }
};

export default signInUserReducer;
