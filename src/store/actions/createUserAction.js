import fire from 'config/firebase';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_ERROR = 'CREATE_USER_ERROR';

// Creating a user
const createUserAction = user => {
    return async dispatch => {
        try {
            fire.auth()
                .createUserWithEmailAndPassword(user.email, user.password)
                .then(result => {
                    fire.auth().onAuthStateChanged(user => {
                        dispatch(createUserSuccess(user));
                    });
                });
        } catch (error) {
            dispatch(createUserError(error));
        }
    };
};

export const createUserSuccess = user => {
    return {
        type: CREATE_USER_SUCCESS,
        user: user
    };
};

export const createUserError = error => {
    return {
        type: CREATE_USER_ERROR,
        error: error
    };
};

export default createUserAction;
