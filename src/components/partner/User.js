import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import SimpleBar from 'simplebar-react';
import { Card, Icon, Image } from 'semantic-ui-react';
import 'simplebar/dist/simplebar.min.css';

import { BASE_URL } from 'environment';
import image from './matthew.png';
import './User.css';

class UserProfileCard extends Component {
    render() {
        const { userList } = this.props;
        const Container = styled.ul`
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            list-style: none;
        `;
        const CardDiv = styled.li`
            flex: 50%;
            padding-bottom: 30px;
        `;
        return (
            <>
                <Container>
                    {userList.map((user, i) => {
                        return (
                            <CardDiv key={user._id}>
                                <Card className='card_wrpper'>
                                    <Image src={image} wrapped ui={false} />
                                    <Card.Content>
                                        <Card.Header>Matthew</Card.Header>
                                        <Card.Meta>
                                            <span className='date'>
                                                Joined in 2019.SEP
                                            </span>
                                        </Card.Meta>
                                        <Card.Description>
                                            This is a primary location
                                        </Card.Description>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <a>
                                            <Icon name='user' />
                                            22 workout friends
                                        </a>
                                    </Card.Content>
                                </Card>
                            </CardDiv>
                        );
                    })}
                </Container>
            </>
        );
    }
}

export default class User extends Component {
    state = {
        username: '',
        email: '',
        firstName: '',
        lastName: '',
        gender: 0,
        users: [],
        user: {}
    };

    componentDidMount = () => {
        fetch(`${BASE_URL}/user`)
            .then(response => response.json())
            .then(data => {
                this.setState({ users: data });
            });
    };

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
                    <UserProfileCard userList={this.state.users} />
                </SimpleBar>
            </>
        );
    }
}
