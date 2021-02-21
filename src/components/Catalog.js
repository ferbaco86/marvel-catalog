import React from 'react';
import styled from 'styled-components';
import HeroCard from './HeroCard';
import NavBar from './NavBar';

const CardsContainer = styled.div`
display: flex;
flex-wrap: wrap;
padding: 2rem 6.5rem;
`;

const Catalog = () => (
  <>
    <NavBar />
    <CardsContainer>
      <HeroCard />
      <HeroCard />
      <HeroCard />
      <HeroCard />
      <HeroCard />
      <HeroCard />
      <HeroCard />
      <HeroCard />
      <HeroCard />
      <HeroCard />
    </CardsContainer>
  </>
);

export default Catalog;
