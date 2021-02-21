import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #202020;
margin: 2rem;`;

const Title = styled.h1`
color: white;
font-family: 'Roboto Condensed', sans-serif;
font-weight: 700`;

const SubTitle = styled.p`
color: white;`;

const HeroCard = () => (
  <Card>
    <img src="https://images.cdn3.buscalibre.com/fit-in/360x360/b5/5e/b55e722726cb6ea617fb3d2511f0dcd5.jpg" alt="Spider-Man Portrait" />
    <Title>Spider-Man</Title>
    <SubTitle>Peter Parker</SubTitle>
  </Card>
);

export default HeroCard;
