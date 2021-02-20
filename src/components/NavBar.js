import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
display: flex;
padding: 20px;
align-items: center;
background-color: #202020;
font-family: 'Roboto Condensed', sans-serif;`;

const NavTitle = styled.h2`
font-size: 30px;
color: white;`;

const NavBar = () => (

  <Nav>
    <NavTitle>
      Marvel Catalog
    </NavTitle>
  </Nav>

);

export default NavBar;
