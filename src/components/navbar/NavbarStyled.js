import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavItems = styled.ul`
    display: flex;
    justify-content: space-between;
    grid-gap: 20px;
    list-style: none;
`;

export const NavItem = styled.li`
    padding-left: 60px;
`;

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-height: 80px;
    position: relative;
    align-items: left;
    background-color: #fcfbf7;
`;

export const A = styled(Link)`
    background-color: #fcfbf7;
    display: block;
    text-decoration: none;
    padding: 0.8rem;
    text-align: center;
    color: #445a52;
    font-size: 14;
    font-weight: 500;
    text-transform: uppercase;
    box-shadow: black;
    max-height: 80px;
`;
export const LogoLink = styled(A)`
    background-color: white;
`;
export const SignUpLink = styled(A)`
    display: inline-block;
    height: 75px;
    width: 205px;
    position: relative;
    bottom: 13px;
    text-align: center;
    line-height: 45px;
    color: white;
    background-color: #173839;
`;

export const SignedInLink = styled(A)`
    display: inline-block;
    height: 75px;
    width: 205px;
    position: relative;
    bottom: 13px;
    text-align: center;
    line-height: 45px;
    color: white;
    background-color: #173839;
`;

export const Img = styled.img`
    background-color: white;
    width: 217px;
    height: 57px;
`;

export const Div = styled.div``;
