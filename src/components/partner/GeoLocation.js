import React from 'react';

class GeoLocation extends React.Component {
    state = {
        latitude: null,
        longitude: null
    };
    componentDidMount = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                this.getCoordinates,
                this.handlePermissionDenied
            );
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

    handlePermissionDenied = error => {
        if (error.code === error.PERMISSION_DENIED) {
            this.setState({
                latitude: 43.653225,
                longitude: -79.383186
            });
        }
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
