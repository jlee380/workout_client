const initialState = {
    users: []
};

const userReducer = (state = initialState, action) => {
    if (action.type === 'USER_FETCH_SUCCESS') {
        return {
            ...state,
            users: action.users
        };
    } else {
        return {
            ...state
        };
    }
};

export default userReducer;
