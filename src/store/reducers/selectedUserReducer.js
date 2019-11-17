import { SELECTED_USER } from 'store/actions/selectedUserAction';
import { SIGN_UP_MODAL_CLOSE } from 'store/actions/signupAction';

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
        case SIGN_UP_MODAL_CLOSE:
            return {
                ...state,
                selectedUser: null
            };
        default:
            return {
                ...state
            };
    }
};

export default selectedUserReducer;
