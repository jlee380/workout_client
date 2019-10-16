import { combineReducers } from 'redux';

import gymReducer from './gymReducer';
import userReducer from './userReducer';
import selectedGymReducer from './selectedGymReducer';
import signupReducer from './signupReducer';

const rootReducer = combineReducers({
    gymReducer,
    userReducer,
    selectedGymReducer,
    signupReducer
});

export default rootReducer;
