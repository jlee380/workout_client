export const LOCATION_ERROR = 'LOCATION_ERROR';
export const LOCATION_SUCCESS = 'LOCATION_SUCCESS';

const userLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            this.getCoordinates,
            this.handlePermissionDenied
        );
    } else {
        alert('Geolocation is not supported by this browser.');
    }
};

const getCoordinates = position => {
    console.log(position.coords.latitude);
    this.setState({
        lat: position.coords.latitude,
        lng: position.coords.longitude
    });
};

const handlePermissionDenied = error => {
    if (error.code === error.PERMISSION_DENIED) {
        this.setState({
            lat: 43.653225,
            lng: -79.383186
        });
    }
};

export const userLocationSuccess = location => {
    return {
        type: LOCATION_SUCCESS,
        location: location
    };
};

export const userLocationError = error => {
    return {
        type: LOCATION_ERROR,
        error: error
    };
};

export default userLocation;
