import React, { Component } from 'react';
import styled from 'styled-components';
import { Card, Icon, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import fetchUserAction from 'actions/index';
import * as actionCreators from 'actions/index';

import image from './matthew.png';

class UserProfileCard extends Component {
    componentDidMount = () => {
        this.props.fetchUser();
    };
    render() {
        const { users } = this.props;
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
                    {/* {`this is from redux ${this.props.users}`} */}
                    {users.map((user, i) => {
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

const mapStateToProps = state => {
    return {
        users: state.users
    };
};

export default connect(
    mapStateToProps,
    actionCreators
)(UserProfileCard);
