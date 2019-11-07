import React, { Component } from 'react';
import styled from 'styled-components';
import { Card, Icon, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import image from './matthew.png';
import SyncLoader from 'react-spinners/SyncLoader';

import { openModalAction } from 'store/actions/signupAction';

import fetchUser from 'store/actions/userAction';
import selectedUser from 'store/actions/selectedUserAction';

class UserProfileCard extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    render() {
        const { users, error, pending } = this.props;

        if (pending) {
            return (
                <>
                    <SyncLoader sizeUnit={'px'} size={40} color={'black'} />
                </>
            );
        }

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
                {error ? (
                    <div>Error occurred</div>
                ) : (
                    <Container>
                        {users.map((user, i) => {
                            return (
                                <Link
                                    onClick={() => {
                                        this.props.openModalAction();
                                        this.props.selectedUser(user);
                                    }}
                                    to={{ pathname: '/partner/:uid' }}
                                >
                                    <CardDiv key={user._id}>
                                        <Card className='card_wrpper'>
                                            <Image
                                                src={image}
                                                wrapped
                                                ui={false}
                                            />
                                            <Card.Content>
                                                <Card.Header>
                                                    {user.firstName}
                                                </Card.Header>
                                                <Card.Meta>
                                                    <span className='date'>
                                                        Joined in 2019.SEP
                                                    </span>
                                                </Card.Meta>
                                                <Card.Description>
                                                    {user.email}
                                                </Card.Description>
                                            </Card.Content>
                                            <Card.Content extra>
                                                <a>
                                                    <Icon name='user' />
                                                    {user._id}
                                                </a>
                                            </Card.Content>
                                        </Card>
                                    </CardDiv>
                                </Link>
                            );
                        })}
                    </Container>
                )}
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
    fetchUser: () => dispatch(fetchUser()),
    selectedUser: user => dispatch(selectedUser(user))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserProfileCard);
