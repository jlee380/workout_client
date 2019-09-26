import React, { Component } from 'react';
import User from './User';
import GoogleMap from './GoogleMap';

export default class Partner extends Component {
    render() {
        const style = {
            display: 'grid'
            // gridtemplatecolumns: repeat(2, 1fr),
        };
        return (
            <div style={style}>
                <User></User>
                <GoogleMap></GoogleMap>
            </div>
        );
    }
}
