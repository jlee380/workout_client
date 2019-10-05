import React from 'react';
import { geolocated } from 'react-geolocated';

class GeoLocation extends React.Component {
    state = {
        latitude: null,
        longitude: null
    };
    componentDidMount = () => {
        console.log('getlocation is available', navigator.geolocation);

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getCoordinates);
        } else {
            alert('Geolocation is not supported by this browser.');
        }
    };

    getCoordinates = position => {
        console.log(position.coords.latitude);
        this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        });
    };

    render() {
        return (
            <>
                <p>{`lat: ${this.state.latitude}`}</p>
                <p>{`lng: ${this.state.longitude}`}</p>
            </>
        );
    }
}

export default GeoLocation;
