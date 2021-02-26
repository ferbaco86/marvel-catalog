import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
display: flex;
flex-direction: column;
padding: 1rem 6.5rem 0.3rem 6.5rem;
align-items: center;
justify-content: center;
background-color: #202020;`;

const StyledLink = styled.a`
text-decoration: none;
color: #fff;
`;

const Small = styled.small`
color: #fff;
&:hover {
  color: #bbb;
}
`;

const Footer = () => (

  <FooterContainer>
    <StyledLink href="https://github.com/ferbaco86">
      <Small>Made by Fernando Bahamondes</Small>
    </StyledLink>
    <StyledLink href="http://marvel.com">
      <Small>Data provided by Marvel. © 2021 MARVEL</Small>
    </StyledLink>
  </FooterContainer>

);

export default Footer;
