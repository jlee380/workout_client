export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_ERROR = 'SIGN_IN_ERROR';
export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';

const signInUserAction = credential => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase
            .auth()
            .signInWithEmailAndPassword(credential.email, credential.password)
            .then(() => dispatch(signInSuccess()))
            .catch(err => {
                dispatch(signInError(err));
            });
    };
};

export const signOutUserAction = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase
            .auth()
            .signOut()
            .then(() => {
                dispatch(signOutSuccess());
            });
    };
};

export const signInSuccess = () => {
    return {
        type: SIGN_IN_SUCCESS
    };
};

export const signInError = err => {
    return {
        type: SIGN_IN_ERROR,
        error: err
    };
};

export const signOutSuccess = () => {
    return {
        type: SIGN_IN_SUCCESS
    };
};

export default signInUserAction;
