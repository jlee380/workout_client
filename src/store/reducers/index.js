import { combineReducers } from 'redux';

import gymReducer from './gymReducer';
import userReducer from './userReducer';
import selectedGymReducer from './selectedGymReducer';

const rootReducer = combineReducers({
    gymReducer,
    userReducer,
    selectedGymReducer
});

export default rootReducer;
