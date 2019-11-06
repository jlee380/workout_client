import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Form, Message } from 'semantic-ui-react';
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

        firstNameError: '',
        lastNameError: '',
        emailError: '',
        passwordError: ''
    };

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();

        const err = this.handleFormValidation();

        if (!err) {
            this.setState({
                firstName: '',
                lastName: '',
                gender: '',
                email: '',
                password: '',
                confirmPassword: '',

                firstNameError: '',
                lastNameError: '',
                emailError: '',
                passwordError: ''
            });
            this.props.createUserAction(this.state);
        }
    };

    handleIsErrorFree = () => {
        let error = null;
        if (
            !!this.state.firstNameError ||
            !!this.state.lastNameError ||
            !!this.state.emailError ||
            !!this.state.passwordError
        ) {
            error = true;
        } else {
            error = false;
        }
        return error;
    };

    handleFormValidation = () => {
        let error = false;
        const {
            firstName,
            lastName,
            email,
            password,
            confirmPassword
        } = this.state;

        const errors = {
            firstNameError: '',
            lastNameError: '',
            emailError: '',
            passwordError: ''
        };

        if (firstName.length < 2) {
            error = true;
            errors.firstNameError = 'First name must be at least 2 characters';
        }

        if (lastName.length < 2) {
            error = true;
            errors.lastNameError = 'Last name must be at least 2 characters';
        }

        if (!email) {
            error = true;
            errors.emailError = 'Requires email';
        } else if (email.indexOf('@') === -1) {
            errors.emailError = 'Email should contain @ sign';
        } else if (email.indexOf('.') === -1) {
            errors.emailError = 'Email should contain at least one dot';
        }

        if (!password) {
            error = true;
            errors.passwordError = 'Requires password';
        } else if (password != confirmPassword) {
            error = true;
            errors.passwordError = "Passwords don't match";
        }

        this.setState({
            ...this.state,
            ...errors
        });
        console.log(this.state.firstNameError);
        return error;
    };

    handleErrorMessages = () => {
        const errorMsgArr = [];

        const {
            firstNameError,
            lastNameError,
            emailError,
            passwordError
        } = this.state;

        const arr = [firstNameError, lastNameError, emailError, passwordError];

        arr.map(errorMsg => {
            if (errorMsg) {
                errorMsgArr.push(errorMsg);
            }
        });

        return errorMsgArr;
    };

    render() {
        const { authError } = this.props;
        const {
            firstNameError,
            lastNameError,
            emailError,
            passwordError
        } = this.state;

        return (
            <>
                {console.log(this.handleErrorMessages())}
                <Form error={this.handleIsErrorFree()}>
                    <Form.Group widths='equal'>
                        <Form.Input
                            error={!!firstNameError}
                            fluid
                            label='First name'
                            placeholder='First name'
                            id='firstName'
                            onChange={this.handleChange}
                            required
                        />
                        <Form.Input
                            error={!!lastNameError}
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
                            error={!!emailError}
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
                            error={!!passwordError}
                            fluid
                            type='password'
                            label='Password'
                            placeholder='password'
                            id='password'
                            onChange={this.handleChange}
                            required
                        />
                        <Form.Input
                            error={!!passwordError}
                            fluid
                            type='password'
                            label='Confirm Password'
                            placeholder='Confirm Password'
                            id='confirmPassword'
                            onChange={this.handleChange}
                            required
                        />
                    </Form.Group>
                    <Message
                        error
                        header='Something went wrong!'
                        list={this.handleErrorMessages()}
                    />
                    <Form.Button onClick={this.handleSubmit}>
                        Submit
                    </Form.Button>
                </Form>
            </>
        );
    }
}

const mapPropsToState = state => {
    return {
        authError: state.createUserReducer.error
    };
};

const mapDispatchToProps = dispatch => ({
    createUserAction: user => dispatch(createUserAction(user))
});

export default connect(
    mapPropsToState,
    mapDispatchToProps
)(SignupForm);
