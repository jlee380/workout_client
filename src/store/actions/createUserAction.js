export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_ERROR = 'CREATE_USER_ERROR';

// Creating a user
const createUserAction = newUser => {
    return async (dispatch, getState, { getFirebase, getFirestore }) => {
        try {
            const firebase = getFirebase();
            const firestore = getFirestore();
            console.log('Clicked');

            firebase
                .auth()
                .createUserWithEmailAndPassword(newUser.email, newUser.password)
                .then(result => {
                    firestore
                        .collection('users')
                        .doc(result.user.uid)
                        .set({
                            firstName: newUser.firstName,
                            lastName: newUser.lastName,
                            gender: newUser.gender,
                            initials: newUser.firstName[0] + newUser.lastName[0]
                        });
                })
                .then(() => {
                    dispatch(createUserSuccess(newUser));
                })
                .catch(error => {
                    dispatch(createUserError(error));
                });
        } catch (error) {
            dispatch(createUserError(error));
        }
    };
};

export const createUserSuccess = newUser => {
    return {
        type: CREATE_USER_SUCCESS,
        newUser: newUser
    };
};

export const createUserError = error => {
    return {
        type: CREATE_USER_ERROR,
        error: error
    };
};

export default createUserAction;
