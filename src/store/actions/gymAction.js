import { BASE_URL } from 'environment';

export const GYM_FETCH_SUCCESS = 'GYM_FETCH_SUCCESS';
export const GYM_FETCH_PENDING = 'GYM_FETCH_PENDING';
export const GYM_FETCH_ERROR = 'GYM_FETCH_ERROR';

const fetchGym = () => {
    return dispatch => {
        dispatch(fetchGymPending());
        return fetch(`${BASE_URL}/gym`)
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    throw data.error;
                }
                dispatch(fetchGymSuccess(data));
            })
            .catch(error => {
                dispatch(fetchGymError(error));
            });
    };
};

export const fetchGymSuccess = gyms => {
    return {
        type: GYM_FETCH_SUCCESS,
        gyms: gyms
    };
};
export const fetchGymPending = () => {
    return {
        type: GYM_FETCH_PENDING
    };
};
export const fetchGymError = error => {
    return {
        type: GYM_FETCH_ERROR,
        error: error
    };
};

export default fetchGym;
