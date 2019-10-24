import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';

import gymReducer from './gymReducer';
import userReducer from './userReducer';
import selectedGymReducer from './selectedGymReducer';
import signupReducer from './signupReducer';
import createUserReducer from './createUserReducer';

const rootReducer = combineReducers({
    gymReducer,
    userReducer,
    selectedGymReducer,
    signupReducer,
    createUserReducer,
    firebase: firebaseReducer
});

export default rootReducer;
