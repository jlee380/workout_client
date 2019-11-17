import {
    CREATE_USER_SUCCESS,
    CREATE_USER_ERROR
} from 'store/actions/createUserAction';

const initialState = {
    newUser: {},
    error: null
};

const createUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_USER_SUCCESS:
            return {
                ...state,
                newUser: action.newUser
            };
        case CREATE_USER_ERROR:
            return {
                ...state,
                error: action.error.message
            };

        default:
            return {
                ...state
            };
    }
};

export default createUserReducer;
