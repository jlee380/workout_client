import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { openModalAction } from 'store/actions/signupAction';

import {
    NavItems,
    NavItem,
    Nav,
    A,
    Img,
    LogoLink,
    SignUpLink
} from './NavbarStyled';
import Logo from 'assets/images/logo.png';

class Navbar extends Component {
    componentWillMount() {
        // will trigger the callback function whenever a new Route renders a component(as long as this component stays mounted as routes change)
        this.props.history.listen(() => {
            // view new URL
            // console.log('New URL', this.props.history.location.pathname);
            // console.log('OLD URL', this.props.history.location);
        });
    }
    render() {
        return (
            <Nav>
                <LogoLink to='./'>
                    <Img src={Logo} alt='Home'></Img>
                </LogoLink>
                <NavItems>
                    <NavItem>
                        <A to='./partner'>FIND BUDDY</A>
                    </NavItem>
                    <NavItem>
                        <A to='./gym'>Gym</A>
                    </NavItem>
                    <NavItem>
                        <A to='about'>CONTACT US</A>
                    </NavItem>
                    <NavItem>
                        <SignUpLink
                            onClick={this.props.openModalAction()}
                            to={{ pathname: '/signup' }}
                        >
                            SIGN UP
                        </SignUpLink>
                    </NavItem>
                </NavItems>
            </Nav>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    openModalAction: () => dispatch(openModalAction())
});

export default withRouter(
    connect(
        null,
        mapDispatchToProps
    )(Navbar)
);
