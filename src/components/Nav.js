import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <StyledNav>
            <h1><Link id="logo" to="/">Trevor Hanson</Link></h1>
            <ul>
                <li>
                    <Link to="/"> About Me</Link>
                </li>
                <li>
                    <Link to="/work"> My Work</Link>
                </li>
                <li>
                    <Link to="/contact"> Contact Me</Link>
                </li>
            </ul>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    min-height: 10vh;
    display:flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background-color: #282828;
    a{
        color: white;
        text-decoration: none;
        font-size: 1.5rem;
    }
    #logo {
        font-size: 1.5rem;
        font-family: "Lobster", cursive;
        font-weight: lighter;
    }
    ul{
        display: flex;
        list-style: none;
        
    }
    li{
        padding-left: 10rem;
        position: relative;
    }
`;

export default Nav;