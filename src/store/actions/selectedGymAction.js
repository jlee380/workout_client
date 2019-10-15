export const SELECTED_GYM = 'SELECTED_GYM';
export const UNSELECTED_GYM = 'UNSELECTED_GYM';
export const USERS_IN_A_GYM = 'USERS_IN_A_GYM';

const selectedGymAction = selectedGym => {
    return {
        type: SELECTED_GYM,
        selectedGym: selectedGym
    };
};

export const unselectedGymAction = () => {
    return {
        type: UNSELECTED_GYM,
        selectedGym: null
    };
};

export const usersInSelectedGymAction = userInAGym => {
    return {
        type: USERS_IN_A_GYM,
        usersInSelectedGym: userInAGym
    };
};

export default selectedGymAction;
