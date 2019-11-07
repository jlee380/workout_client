import { SELECTED_USER } from 'store/actions/selectedUserAction';

const initialState = {
    selectedUser: null
};

const selectedUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECTED_USER:
            return {
                ...state,
                selectedUser: action.selectedUser
            };
        default:
            return {
                ...state
            };
    }
};

export default selectedUserReducer;
