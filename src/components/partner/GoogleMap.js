import React, { Component } from 'react';
import {
    GoogleMap,
    withScriptjs,
    withGoogleMap,
    Marker,
    InfoWindow
} from 'react-google-maps';

import * as gymLocation from 'data/gymData';
import styles from './GoogleMapStyle.json';
import gymIcon from 'assets/images/gym.svg';

export class GoogleMaps extends Component {
    state = {
        selectedGym: null,
        showInfo: '',
        showInfoIndex: ''
    };

    handleSelectedGym = gym => {
        this.setState({
            selectedGym: gym
        });
    };
    handleClose = () => {
        this.setState({
            selectedGym: null
        });
    };

    render() {
        // const { selectedGym } = this.state.selectedGym;
        return (
            <>
                <GoogleMap
                    defaultZoom={13}
                    defaultCenter={{ lat: 43.653225, lng: -79.383186 }}
                    defaultOptions={{
                        disableDefaultUI: false,
                        draggable: true,
                        keyboardShortcuts: false,
                        scaleControl: true,
                        scrollwheel: true,
                        styles: styles
                    }}
                >
                    {gymLocation.results.map(gym => {
                        return (
                            // <InfoWIndow
                            //     key={gym.place_id}
                            //     lat={gym.geometry.location.lat}
                            //     lng={gym.geometry.location.lng}
                            // />
                            <Marker
                                key={gym.place_id}
                                position={{
                                    lat: gym.geometry.location.lat,
                                    lng: gym.geometry.location.lng
                                }}
                                onClick={() => {
                                    this.handleSelectedGym(gym);
                                }}
                                icon={{
                                    url: gymIcon,
                                    scaledSize: new window.google.maps.Size(
                                        25,
                                        25
                                    )
                                }}
                            />
                        );
                    })}
                    {this.state.selectedGym && (
                        <InfoWindow
                            position={{
                                lat: this.state.selectedGym.geometry.location
                                    .lat,
                                lng: this.state.selectedGym.geometry.location
                                    .lng
                            }}
                            onCloseClick={this.handleClose}
                        >
                            <>
                                <h2>{this.state.selectedGym.name}</h2>
                                <p>
                                    {this.state.selectedGym.formatted_address}
                                </p>
                                <p>N number of users work out here</p>
                            </>
                        </InfoWindow>
                    )}
                </GoogleMap>
            </>
        );
    }
}

const WrapperdMap = withScriptjs(withGoogleMap(GoogleMaps));

export default WrapperdMap;
