import { BASE_URL } from 'environment';

export const USER_FETCH_SUCCESS = 'USER_FETCH_SUCCESS';
export const USER_FETCH_PENDING = 'USER_FETCH_PENDING';
export const USER_FETCH_ERROR = 'USER_FETCH_ERROR';

// Fetching users
const fetchUser = () => {
    return dispatch => {
        dispatch(fetchUserPending());
        return fetch(`${BASE_URL}/users`)
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
