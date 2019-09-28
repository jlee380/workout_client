import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Ul = styled.ul`
    display: grid;
    grid-gap: 20px;
    padding: 0;
    list-style: none;
    grid-template-columns: repeat(8, 1fr);
`;

export const Li = styled.li``;

export const Nav = styled.nav`
    width: 100%;
    position: relative;
    background-color: #fcfbf7;
`;

export const A = styled(Link)`
    background-color: #fcfbf7;
    display: block;
    text-decoration: none;
    padding: 0.8rem;
    text-align: center;
    color: black;
    text-transform: uppercase;
    font-size: 1.1rem;
    box-shadow: black;
    :hover {
        background-color: rgba(0, 0, 0, 0.3);
    }
`;
