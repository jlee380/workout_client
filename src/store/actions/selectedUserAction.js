export const SELECTED_USER = 'SELECTED_USER';

const selectedUser = selectedUser => {
    return {
        type: SELECTED_USER,
        selectedUser: selectedUser
    };
};

export default selectedUser;
