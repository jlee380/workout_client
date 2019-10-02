export const fetchUser = () => {
    return dispatch => {
        return fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                dispatch(fetchUserSuccess(data));
                return data;
            });

        // .then(data => {
        //     console.log(data);
        //     dispatch(fetchUserSuccess(data));
        //     return data;
        // });
    };
};

export const fetchUserSuccess = users => {
    return {
        type: 'USER_FETCH_SUCCESS',
        users: users
    };
};
