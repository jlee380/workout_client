import React from 'react';

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

const Navbar = () => {
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
                        to={{ pathname: '/signup', state: { modal: true } }}
                    >
                        SIGN UP
                    </SignUpLink>
                </NavItem>
            </NavItems>
        </Nav>
    );
};

export default Navbar;
