import React, { Component } from 'react';
import styled from 'styled-components';
import { Card, Icon, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import image from './matthew.png';
import fetchUserAction from 'actions/userAction';
import SyncLoader from 'react-spinners/SyncLoader';

class UserProfileCard extends Component {
    componentWillMount() {
        const { fetchUser } = this.props;
        fetchUser();
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
                                                {user._id}
                                            </a>
                                        </Card.Content>
                                    </Card>
                                </CardDiv>
                            );
                        })}
                    </Container>
                )}
            </>
        );
    }
}

const mapStateToProps = state => ({
    users: state.users,
    error: state.error,
    pending: state.pending
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            fetchUser: fetchUserAction
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserProfileCard);
