export const USER_FETCH_SUCCESS = 'USER_FETCH_SUCCESS';
export const USER_FETCH_PENDING = 'USER_FETCH_PENDING';
export const USER_FETCH_ERROR = 'USER_FETCH_ERROR';

const fetchUser = () => {
    return dispatch => {
        dispatch(fetchUserPending());
        return fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    throw data.error;
                }
                dispatch(fetchUserSuccess(data));
            })
            .catch(error => {
                dispatch(fetchUserError(error));
            });
    };
};

export const fetchUserSuccess = users => {
    return {
        type: USER_FETCH_SUCCESS,
        users: users
    };
};
export const fetchUserPending = () => {
    return {
        type: USER_FETCH_PENDING
    };
};
export const fetchUserError = error => {
    return {
        type: USER_FETCH_ERROR,
        error: error
    };
};

export default fetchUser;
