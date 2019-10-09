import { SELECTED_GYM } from 'store/actions/selectedGymAction';

const initialState = {
    selectedGym: null
};

const selectedGymReducer = (state = initialState, action) => {
    if (action.type === SELECTED_GYM) {
        return {
            ...state,
            selectedGym: action.selectedGym,
            error: action.error
        };
    } else {
        return {
            ...state
        };
    }
};

export default selectedGymReducer;
