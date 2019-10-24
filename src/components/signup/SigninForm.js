import React, { Component } from 'react';
import fire from 'config/firebase';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Form } from 'semantic-ui-react';
import { closeModalAction } from 'store/actions/signupAction';

class SigninForm extends Component {
    state = {
        email: '',
        password: '',
        user: {}
    };

    componentDidMount() {
        this.authListener();
    }

    authListener() {
        fire.auth().onAuthStateChanged(user => {
            console.log(user);
            if (user) {
                this.setState({ user });
            } else {
                this.setState({ user: null });
            }
        });
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };
    handleSubmit = e => {
        e.preventDefault();
        fire.auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(u => {})
            .catch(err => {
                console.log(err);
            });
        this.props.closeModalAction();
        this.props.history.push('/');
    };

    handleSignout = () => {
        fire.auth().signOut();
        this.props.closeModalAction();
        this.props.history.push('/');
    };

    render() {
        return (
            <>
                {this.state.user ? (
                    <>
                        <div>You are logged in successfully</div>
                        <button onClick={this.handleSignout}>Sing out</button>
                    </>
                ) : (
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
                                label='Password'
                                placeholder='Password'
                                id='password'
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                        <Form.Button>Submit</Form.Button>
                    </Form>
                )}
            </>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    closeModalAction: () => dispatch(closeModalAction())
});

export default withRouter(
    connect(
        null,
        mapDispatchToProps
    )(SigninForm)
);
