import React, { Component } from 'react';
import styled from 'styled-components';

import User from './User';
import GoogleMap from './GoogleMap';
import WrapperdMap from './GoogleMap';

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
                    <WrapperdMap
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
                        loadingElement={<div style={{ height: '100%' }} />}
                        containerElement={<div style={{ height: '100%' }} />}
                        mapElement={<div style={{ height: '100%' }} />}
                    />
                </CardDiv>
            </Container>
        );
    }
}

// {process.env.REACT_APP_GOOGLE_KEY}
