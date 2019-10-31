import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Form } from 'semantic-ui-react';
import createUserAction from 'store/actions/createUserAction';

const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' }
];

class SignupForm extends Component {
    state = {
        firstName: '',
        lastName: '',
        gender: '',
        email: '',
        password: '',
        username: ''
    };

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.createUserAction(this.state);
    };
    render() {
        return (
            <>
                <Form>
                    <Form.Group widths='equal'>
                        <Form.Input
                            fluid
                            label='First name'
                            placeholder='First name'
                            id='firstName'
                            onChange={this.handleChange}
                            required
                        />
                        <Form.Input
                            fluid
                            label='Last name'
                            placeholder='Last name'
                            id='lastName'
                            onChange={this.handleChange}
                            required
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
                    <Form.Group widths={3}>
                        <Form.Input
                            fluid
                            label='Email'
                            placeholder='Email'
                            id='email'
                            onChange={this.handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Input
                            fluid
                            type='password'
                            label='Password'
                            placeholder='password'
                            id='password'
                            onChange={this.handleChange}
                            required
                        />
                        <Form.Input
                            fluid
                            type='password'
                            label='Confirm Password'
                            placeholder='Confirm Password'
                            id='ConfirmPassword'
                            onChange={this.handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Button onClick={this.handleSubmit}>
                        Submit
                    </Form.Button>
                </Form>
            </>
        );
    }
}

const mapPropsToState = state => {
    return {};
};

const mapDispatchToProps = dispatch => ({
    createUserAction: user => dispatch(createUserAction(user))
});

export default connect(
    mapPropsToState,
    mapDispatchToProps
)(SignupForm);
