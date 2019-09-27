import React, { Component } from 'react';
import User from './User';
import GoogleMap from './GoogleMap';
import styled from 'styled-components';

export default class Partner extends Component {
    render() {
        const Container = styled.div`
            display: flex;
            list-style: none;
            /* overflow: hidden; */
        `;
        const CardDiv = styled.div`
            flex: 50%;
            background-color: white;
            /* overflow-y: scroll; */
        `;
        return (
            <Container>
                <CardDiv>
                    <User></User>
                </CardDiv>
                <CardDiv>
                    <GoogleMap></GoogleMap>
                </CardDiv>
            </Container>
        );
    }
}
