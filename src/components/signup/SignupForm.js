import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' }
];

class SignupForm extends Component {
    state = {
        firstName: '',
        lastName: '',
        gender: 0,
        email: '',
        username: ''
    };

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };
    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
    };
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group widths='equal'>
                    <Form.Input
                        fluid
                        label='First name'
                        placeholder='First name'
                        id='firstName'
                        onChange={this.handleChange}
                    />
                    <Form.Input
                        fluid
                        label='Last name'
                        placeholder='Last name'
                        id='lastName'
                        onChange={this.handleChange}
                    />

                    <Form.Select
                        fluid
                        label='Gender'
                        options={options}
                        placeholder='Gender'
                        id='gender'
                        onChange={this.handleChange}
                    />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input
                        fluid
                        label='Email'
                        placeholder='Email'
                        id='email'
                        onChange={this.handleChange}
                    />
                    <Form.Input
                        fluid
                        label='Username (optinal)'
                        placeholder='Username'
                        id='username'
                        onChange={this.handleChange}
                    />
                </Form.Group>
                <Form.Button>Submit</Form.Button>
            </Form>
        );
    }
}

export default SignupForm;
