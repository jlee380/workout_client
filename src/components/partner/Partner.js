import React, { Component } from 'react';
import styled from 'styled-components';

import User from './User';
import GoogleMap from './GoogleMap';

export default class Partner extends Component {
    render() {
        const Container = styled.div`
            display: flex;
            list-style: none;
        `;
        const CardDiv = styled.div`
            flex: 50%;
            background-color: white;
        `;
        return (
            <Container>
                <CardDiv>
                    <User />
                </CardDiv>
                <CardDiv>
                    <GoogleMap />
                </CardDiv>
            </Container>
        );
    }
}
