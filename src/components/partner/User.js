import React, { Component, Fragment } from 'react';
import { BASE_URL } from '../../environment';

const UserProfile = () => {
    return (
        <ul>
            <li>
                <a></a>
            </li>
        </ul>
    );
};

export default class User extends Component {
    state = {
        username: '',
        email: '',
        firstName: '',
        lastName: '',
        gender: 0,
        users: [{ _id: 1 }, { _id: 2 }],
        user: {}
    };

    handleGetUser = () => {};

    componentDidMount = () => {
        fetch(`${BASE_URL}/user`)
            .then(response => response.json())
            .then(data => {
                this.setState({ users: data });
            });
    };

    render() {
        return (
            <>
                <UserProfile />
                <ul>
                    {this.state.users.map((user, i) => {
                        return <li key={user._id}>{user._id}</li>;
                    })}
                    {this.user}
                </ul>
            </>
        );
    }
}

{
    /* <button onClick={this.handleGetUser}>Fetching users</button>
                <ul>
                    {this.state.users.map((user, i) => {
                        return <li key={user._id}>{user._id}</li>;
                    })}
                    {this.user}
                </ul> */
}
