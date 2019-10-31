export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_ERROR = 'SIGN_IN_ERROR';

const signInUserAction = credential => {
    return (dispatch, getState, getFirebase) => {
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

export default signInUserAction;
