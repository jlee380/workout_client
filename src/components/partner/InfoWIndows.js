import React, { Component } from 'react';
import {
    GoogleMap,
    withScriptjs,
    withGoogleMap,
    Marker,
    InfoWindow
} from 'react-google-maps';

export default class InfoWIndows extends Component {
    state = {
        openInfoWindowMarkerId: ''
    };

    handleToggleOpen = markerId => {
        this.setState({
            openInfoWindowMarkerId: markerId
        });
    };
    render() {
        const { lat, lng, keyValue } = this.props;
        return (
            <div>
                <Marker
                    key={keyValue}
                    position={{ lat: lat, lng: lng }}
                    onClick={() => this.handleToggleOpen(keyValue)} // marker ID is the key here.
                ></Marker>
            </div>
        );
    }
}
