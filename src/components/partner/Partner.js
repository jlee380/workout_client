import React, { Component } from 'react';
import User from './User';
import GoogleMap from './GoogleMap';
import styled from 'styled-components';

export default class Partner extends Component {
    render() {
        const Div = styled.div`
            display: grid;
            grid-template-columns: 50% 50%;
        `;
        return (
            <Div>
                <User></User>
                <GoogleMap></GoogleMap>
            </Div>
        );
    }
}
