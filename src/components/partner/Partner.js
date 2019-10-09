import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import User from './User';
import GoogleMap from './GoogleMap';
import { Container, CardDiv } from './PartnerStyle';
import fetchGym from 'store/actions/gymAction';

class Partner extends Component {
    state = {
        users: []
    };

    componentDidMount() {
        this.props.fetchGym();
    }

    handleUserFetch = users => {
        this.setState({
            users
        });
    };

    render() {
        return (
            <Container>
                <CardDiv>
                    <User users={this.state.users} />
                </CardDiv>
                <CardDiv>
                    <GoogleMap
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
                        loadingElement={<div style={{ height: '100%' }} />}
                        containerElement={<div style={{ height: '100%' }} />}
                        mapElement={<div style={{ height: '100%' }} />}
                        gyms={this.props.gyms}
                        onUserFetch={this.handleUserFetch}
                    />
                </CardDiv>
            </Container>
        );
    }
}

// export default Partner;

export const mapStateToProps = state => ({
    gyms: state.gymReducer.gyms,
    error: state.error,
    pending: state.pending
});

const mapDispatchToProps = dispatch => {
    return {
        fetchGym: bindActionCreators(fetchGym, dispatch)
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Partner);
