import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { openModalAction } from 'store/actions/signupAction';
import { signOutUserAction } from 'store/actions/signInUserAction';

import {
    NavItems,
    NavItem,
    Nav,
    A,
    Img,
    LogoLink,
    SignUpLink,
    SignedInLink
} from './NavbarStyled';
import Logo from 'assets/images/logo.png';

class Navbar extends Component {
    render() {
        const { login } = this.props;
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
                        {console.log(login)}
                        {login ? (
                            <SignUpLink
                                onClick={this.props.openModalAction}
                                to={{ pathname: '/signup' }}
                            >
                                SIGN UP
                            </SignUpLink>
                        ) : (
                            <SignedInLink
                                onClick={this.props.signOutUserAction}
                                to={{ pathname: '/' }}
                            >
                                SIGN OUT
                            </SignedInLink>
                        )}
                    </NavItem>
                </NavItems>
            </Nav>
        );
    }
}

const mapStateToProps = state => {
    return {
        login: state.firebase.auth.isEmpty
    };
};

const mapDispatchToProps = dispatch => ({
    openModalAction: () => dispatch(openModalAction()),
    signOutUserAction: () => dispatch(signOutUserAction())
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Navbar)
);
