import React, { Component } from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './User.css';
import {
    Wrapper,
    FilterHeader,
    FilterList,
    Filter,
    CurrentLocation,
    GymLocation
} from './UserStyle';
import UserProfileCard from './UserProfileCard';
import { openModalAction } from 'store/actions/signupAction';

import fetchUser from 'store/actions/userAction';

class User extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        const { usersFromGym, users, error, pending } = this.props;
        return (
            <>
                <Wrapper>
                    <FilterHeader>Filter</FilterHeader>
                    <FilterList>
                        <Filter>First Filter</Filter>
                        <Filter>Second Filter</Filter>
                        <Filter>Third Filter</Filter>
                    </FilterList>
                    <CurrentLocation>Current Location: </CurrentLocation>
                    <GymLocation>North York</GymLocation>
                </Wrapper>
                <SimpleBar style={{ height: '70%' }}>
                    <Link
                        onClick={() => {
                            this.props.openModalAction();
                            this.props.openModalAction();
                        }}
                        to={{ pathname: '/partner/:uid' }}
                    >
                        <UserProfileCard
                            usersFromGym={usersFromGym}
                            users={users}
                            error={error}
                            pending={pending}
                        />
                    </Link>
                </SimpleBar>
            </>
        );
    }
}

const mapStateToProps = state => ({
    users: state.userReducer.users,
    error: state.error,
    pending: state.pending
});

const mapDispatchToProps = dispatch => ({
    openModalAction: () => dispatch(openModalAction()),
    fetchUser: () => dispatch(fetchUser())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User);
