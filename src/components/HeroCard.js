import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const imageSize = 'portrait_uncanny';

const Card = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #202020;
flex: 0 0 20%;
margin: 1rem;
cursor: pointer;
&:hover {
  transform: scale(1.05);
  transition: all .2s linear;
  }`;

const Title = styled.h1`
color: white;
padding: 1rem;
font-family: 'Roboto Condensed', sans-serif;
font-weight: 700;
text-align: center;`;

const Pic = styled.img`
border-bottom: 3px solid #ec1d24;
`;

const HeroCard = props => {
  const {
    name, image, extension,
  } = props;
  return (
    <Card>
      <Pic src={`${image}/${imageSize}.${extension}`} alt={`${name} Portrait`} />
      <Title>{name}</Title>
    </Card>
  );
};

HeroCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  extension: PropTypes.string.isRequired,
};

export default HeroCard;
