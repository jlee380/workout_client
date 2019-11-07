import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'semantic-ui-react';
import { openModalAction, closeModalAction } from 'store/actions/signupAction';

class UserProfileCard extends Component {
    componentDidMount() {
        this.props.openModalAction();
    }

    render() {
        const {
            modal,
            closeModalAction,
            selectedUser,
            users,
            match,
            history,
            location
        } = this.props;
        return (
            <>
                {console.log(match, history, location, users)}
                <Modal open={modal}>
                    <button onClick={closeModalAction} to='/'>
                        X
                    </button>
                    <p>{selectedUser._id}</p>
                </Modal>
            </>
        );
    }
}

const mapStateToProps = state => ({
    modal: state.signupReducer.modal,
    users: state.userReducer.users,
    error: state.error,
    pending: state.pending,
    selectedUser: state.selectedUser.selectedUser
});

const mapDispatchToProps = dispatch => {
    return {
        openModalAction: () => dispatch(openModalAction()),
        closeModalAction: () => dispatch(closeModalAction())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserProfileCard);
