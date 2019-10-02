import React, { Component } from 'react';
import styled from 'styled-components';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import './User.css';
import UserProfileCard from './UserProfileCard';

export default class User extends Component {
    // state = {
    //     username: '',
    //     email: '',
    //     firstName: '',
    //     lastName: '',
    //     gender: 0,
    //     users: [],
    //     user: {}
    // };

    // componentDidMount = () => {
    //     fetch(`${BASE_URL}/user`)
    //         .then(response => response.json())
    //         .then(data => {
    //             this.setState({ users: data });
    //         });
    // };

    render() {
        const Wrapper = styled.div`
            padding-left: 40px;
        `;

        const FilterHeader = styled.div`
            flex: 100%;
            text-transform: uppercase;
            font-weight: 700;
            font-size: 8px;
            padding-bottom: 10px;
        `;
        const FilterList = styled.div`
            display: flex;
            flex: 100%;
            flex-direction: row;
        `;
        const Filter = styled.div`
            font-size: 16px;
            align-items: center;
            cursor: pointer;
            padding-right: 70px;
            padding-bottom: 20px;

            &:actvie {
                font-weight: bold;
            }
        `;
        const CurrentLocation = styled.div`
            flex: 100%;
            text-transform: uppercase;
            font-weight: 700;
            font-size: 8px;
        `;
        const GymLocation = styled.div`
            flex: 100%;
            text-transform: uppercase;
            font-weight: bold;
            font-size: 18px;
            align-items: center;
            padding-bottom: 20px;
        `;
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
                    <UserProfileCard />
                </SimpleBar>
            </>
        );
    }
}
