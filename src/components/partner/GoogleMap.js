import React, { Component } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

export class GoogleMaps extends Component {
    render() {
        return (
            <>
                <GoogleMap
                    defaultZoom={13}
                    defaultCenter={{ lat: 43.653225, lng: -79.383186 }}
                ></GoogleMap>
            </>
        );
    }
}

const WrapperdMap = withScriptjs(withGoogleMap(GoogleMaps));

export default WrapperdMap;
