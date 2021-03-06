import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";

import styles from "./GoogleMapStyle.json";
import gymIcon from "assets/images/gym.svg";
import selectedGymAction, {
  unselectedGymAction,
  usersInSelectedGymAction
} from "store/actions/selectedGymAction";

class GoogleMaps extends Component {
  state = {
    lat: null,
    lng: null
  };

  componentDidMount = () => {
    // handling user location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this.getCoordinates,
        this.handlePermissionDenied
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  getCoordinates = position => {
    this.setState({
      lat: position.coords.latitude,
      lng: position.coords.longitude
    });
  };

  handlePermissionDenied = error => {
    if (error.code === error.PERMISSION_DENIED) {
      this.setState({
        lat: 43.653225,
        lng: -79.383186
      });
    }
  };

  render() {
    const { gyms, selectedGym } = this.props;
    return (
      <>
        {this.state.lat && this.state.lng ? (
          <GoogleMap
            defaultZoom={13}
            defaultCenter={{
              lat: this.state.lat,
              lng: this.state.lng
            }}
            defaultOptions={{
              disableDefaultUI: false,
              draggable: true,
              keyboardShortcuts: false,
              scaleControl: true,
              scrollwheel: true,
              styles: styles
            }}
          >
            {gyms.map(gym => {
              return (
                <Marker
                  key={gym._id}
                  position={{
                    lat: gym.lat,
                    lng: gym.lng
                  }}
                  onClick={() => {
                    this.props.selectedGymAction(gym);
                    this.props.usersInSelectedGymAction(gym.users);
                  }}
                  icon={{
                    url: gymIcon,
                    scaledSize: new window.google.maps.Size(25, 25)
                  }}
                />
              );
            })}
            {selectedGym && (
              <InfoWindow
                position={{
                  lat: selectedGym.lat,
                  lng: selectedGym.lng
                }}
                onCloseClick={this.props.unselectedGymAction}
              >
                <>
                  <h3>{selectedGym.name}</h3>
                  <p>{selectedGym.formattedAddress}</p>
                  {selectedGym.users.length <= 1 ? (
                    <p>{selectedGym.users.length} user works out here</p>
                  ) : (
                    <p>{selectedGym.users.length} users work out here</p>
                  )}
                </>
              </InfoWindow>
            )}
          </GoogleMap>
        ) : null}
      </>
    );
  }
}

const mapStateToProps = state => ({
  gyms: state.gymReducer.gyms,
  error: state.error,
  pending: state.pending,
  selectedGym: state.selectedGymReducer.selectedGym
});

const mapDispatchToProps = dispatch => {
  return {
    selectedGymAction: bindActionCreators(selectedGymAction, dispatch),
    unselectedGymAction: bindActionCreators(unselectedGymAction, dispatch),
    usersInSelectedGymAction: bindActionCreators(
      usersInSelectedGymAction,
      dispatch
    )
  };
};

export const WrapperdMap = withScriptjs(withGoogleMap(GoogleMaps));

export default connect(mapStateToProps, mapDispatchToProps)(WrapperdMap);
