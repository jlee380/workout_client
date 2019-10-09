import React, { Component } from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

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

export default class User extends Component {
    render() {
        const { usersFromGym } = this.props;
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
                    <UserProfileCard usersFromGym={usersFromGym} />
                </SimpleBar>
            </>
        );
    }
}
