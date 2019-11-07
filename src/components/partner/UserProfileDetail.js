import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Modal } from 'semantic-ui-react';
import { openModalAction, closeModalAction } from 'store/actions/signupAction';

import image from './matthew.png';
import fetchUser from 'store/actions/userAction';
import { bindActionCreators } from '../../../../../../../Library/Caches/typescript/3.6/node_modules/redux';

class UserProfileCard extends Component {
    componentDidMount() {
        this.props.openModalAction();
    }

    render() {
        const {
            modal,
            closeModalAction,
            users,
            match,
            history,
            location
        } = this.props;
        return (
            <>
                {console.log(match, history, location, users)}
                <Modal open={modal}>
                    <button onClick={closeModalAction()} to='/'>
                        X
                    </button>
                    <p>here is detail</p>
                </Modal>
            </>
        );
    }
}

const mapStateToProps = state => ({
    modal: state.signupReducer.modal,
    users: state.userReducer.users,
    error: state.error,
    pending: state.pending
});

const mapDispatchToProps = dispatch => {
    return {
        openModalAction: () => dispatch(openModalAction()),
        closeModalAction: () => bindActionCreators(closeModalAction, dispatch)
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserProfileCard);
