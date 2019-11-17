import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
// import authReducer from './auth';
import { firestoreReducer } from 'redux-firestore';

import gymReducer from './gymReducer';
import userReducer from './userReducer';
import selectedGymReducer from './selectedGymReducer';
import signupReducer from './signupReducer';
import createUserReducer from './createUserReducer';
import signInUserReducer from './signInUserReducer';
import selectedUserReducer from './selectedUserReducer';

const rootReducer = combineReducers({
    gymReducer,
    userReducer,
    selectedGymReducer,
    signupReducer,
    createUserReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    signInUserReducer,
    selectedUser: selectedUserReducer
});

export default rootReducer;
