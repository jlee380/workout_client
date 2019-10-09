export const SELECTED_GYM = 'SELECTED_GYM';

const selectedGymAction = selectedGym => {
    return {
        type: SELECTED_GYM,
        selectedGym: selectedGym
    };
};

export default selectedGymAction;
