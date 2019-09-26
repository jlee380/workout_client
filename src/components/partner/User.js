import React, { Component } from 'react';

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

    handleGetUser = () => {
        fetch('https://159.89.114.98/user')
            .then(response => response.json())
            .then(data => {
                this.setState({ users: data });
            });
    };

    componentDidMount = () => {};

    render() {
        let divStyle = {
            color: 'white'
        };

        return (
            <div style={divStyle}>
                <button onClick={this.handleGetUser}>Fetching users</button>
                <ul>
                    {this.state.users.map((user, i) => {
                        return <li key={user._id}>{user._id}</li>;
                    })}
                    {this.user}
                </ul>
            </div>
        );
    }
}
