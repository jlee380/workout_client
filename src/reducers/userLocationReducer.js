import { LOCATION_ERROR, LOCATION_SUCCESS } from 'actions/userLocationAction';

const initialState = {
    lat: null,
    lng: null
};

const userLocationReducer = (state = initialState, action) => {
    if (action.type === LOCATION_SUCCESS) {
        return {
            ...state,
            users: action.users
        };
    } else if (action.type === LOCATION_ERROR) {
        return {
            ...state,
            error: action.error
        };
    } else {
        return {
            ...state
        };
    }
};

export default userLocationReducer;
