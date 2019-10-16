export const SIGN_UP_MODAL_OPEN = 'SIGN_UP_MODAL_OPEN';
export const SIGN_UP_MODAL_CLOSE = 'SIGN_UP_MODAL_CLOSE';
export const TOGGLE_SIGN_IN_UP = 'TOGGLE_SIGN_IN_UP';

export const openModalAction = () => {
    return dispatch => {
        dispatch({
            type: SIGN_UP_MODAL_OPEN,
            modal: true
        });
    };
};

export const closeModalAction = () => {
    return dispatch => {
        dispatch({
            type: SIGN_UP_MODAL_CLOSE,
            modal: false
        });
    };
};

export const toggleSignInUpAction = () => {
    return dispatch => {
        dispatch({
            type: TOGGLE_SIGN_IN_UP
        });
    };
};
