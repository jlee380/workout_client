import React from 'react';

import { Ul, Li, Nav, A } from './NavbarStyled';

const Navbar = () => {
    return (
        <Nav>
            <Ul>
                <Li>
                    <A to='./'>Home</A>
                </Li>
                <Li>
                    <A to='./gym'>Gym</A>
                </Li>
                <Li>
                    <A to='./user'>User</A>
                </Li>
                <Li>
                    <A to='#'>About</A>
                </Li>
            </Ul>
        </Nav>
    );
};

export default Navbar;
