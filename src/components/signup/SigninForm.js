import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class SigninForm extends Component {
    state = {
        email: '',
        password: ''
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
                        label='Email'
                        placeholder='Email'
                        id='email'
                        onChange={this.handleChange}
                    />

                    <Form.Input
                        fluid
                        label='Email'
                        placeholder='Email'
                        id='email'
                        onChange={this.handleChange}
                    />
                </Form.Group>
                <Form.Button>Submit</Form.Button>
            </Form>
        );
    }
}

export default SigninForm;
