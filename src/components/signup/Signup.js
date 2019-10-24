import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';

import {
    openModalAction,
    closeModalAction,
    toggleSignInUpAction
} from 'store/actions/signupAction';
import { Header, Modal } from 'semantic-ui-react';

import SignupForm from './SignupForm';
import SigninForm from './SigninForm';

class Signup extends Component {
    componentDidMount() {
        this.props.openModalAction();
    }

    render() {
        const { modal, closeModalAction, toggleSignInUp } = this.props;
        const Button = styled(Link)`
            position: relative;
            right: 0;
        `;

        // const signup = this.props.history.location.pathname;

        return (
            <div>
                <Modal open={modal}>
                    <Button onClick={closeModalAction} to='/'>
                        X
                    </Button>
                    <Modal.Header>
                        {toggleSignInUp ? 'Sign up' : 'Sign In'}
                    </Modal.Header>
                    <Modal.Content image>
                        <Modal.Description>
                            <Header>Header</Header>
                            {toggleSignInUp ? <SignupForm /> : <SigninForm />}
                        </Modal.Description>
                    </Modal.Content>
                    <button onClick={this.props.toggleSignInUpAction}>
                        {toggleSignInUp ? 'Sign In' : 'Sign up'}
                    </button>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    modal: state.signupReducer.modal,
    toggleSignInUp: state.signupReducer.toggleSignInUp
});

const mapDispatchToProps = dispatch => ({
    openModalAction: () => dispatch(openModalAction()),
    closeModalAction: () => bindActionCreators(closeModalAction, dispatch),
    toggleSignInUpAction: () => dispatch(toggleSignInUpAction())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Signup);
