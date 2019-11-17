import {
    SIGN_UP_MODAL_OPEN,
    SIGN_UP_MODAL_CLOSE,
    TOGGLE_SIGN_IN_UP
} from 'store/actions/signupAction';

const initialState = {
    modal: false,
    toggleSignInUp: true
};

const signupModal = (state = initialState, action) => {
    if (action.type === SIGN_UP_MODAL_OPEN) {
        return {
            ...state,
            modal: action.modal
        };
    } else if (action.type === SIGN_UP_MODAL_CLOSE) {
        return {
            ...state,
            modal: action.modal
        };
    } else if (action.type === TOGGLE_SIGN_IN_UP) {
        return {
            ...state,
            toggleSignInUp: !state.toggleSignInUp
        };
        // Below is the same thing but other syntax

        // return Object.assign({}, state, {
        //     toggleSignInUp: !state.toggleSignInUp
        // });
    } else {
        return {
            ...state
        };
    }
};

export default signupModal;
