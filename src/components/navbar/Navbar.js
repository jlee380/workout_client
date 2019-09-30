import React from 'react';

import { Ul, Li, Nav, A, Img, Div, LogoLink, SignUpLink } from './NavbarStyled';
import Logo from 'assets/images/logo.png';

const Navbar = () => {
    return (
        <Nav>
            <LogoLink to='./'>
                <Img src={Logo} alt='Home'></Img>
            </LogoLink>
            <Ul>
                <Li>
                    <A to='./partner'>FIND BUDDY</A>
                </Li>
                <Li>
                    <A to='./gym'>Gym</A>
                </Li>
                <Li>
                    <A to='about'>CONTACT US</A>
                </Li>
                <Li>
                    <SignUpLink to='./signup'>SIGN UP</SignUpLink>
                </Li>
            </Ul>
        </Nav>
    );
};

export default Navbar;
