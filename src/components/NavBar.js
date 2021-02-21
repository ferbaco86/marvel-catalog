import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
display: flex;
padding: 1.5rem 6.5rem;
align-items: center;
justify-content: space-between;
background-color: #202020;
font-family: 'Roboto Condensed', sans-serif;`;

const NavTitle = styled.h2`
font-size: 2.2rem;
color: white;`;

const LinksContainer = styled.div`
`;

const StyledLink = styled(Link)`
color: white;
margin: 0 1rem;
text-decoration: none;
&:hover {
  color: #f78f3f;
}`;

const NavBar = () => (

  <Nav>
    <NavTitle>
      Marvel Catalog
    </NavTitle>
    <LinksContainer>
      <StyledLink to="/">
        Home
      </StyledLink>
      <StyledLink to="/catalog">
        Catalog
      </StyledLink>
    </LinksContainer>
  </Nav>

);

export default NavBar;
