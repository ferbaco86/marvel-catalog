import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const imageSize = 'portrait_uncanny';

const Card = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #202020;
flex: 1 0 15%;
margin: 2rem;`;

const Title = styled.h1`
color: white;
font-family: 'Roboto Condensed', sans-serif;
font-weight: 700;
text-align: center;`;

const SubTitle = styled.p`
color: white;`;

const Pic = styled.img`
border-bottom: 3px solid #ec1d24`;

const HeroCard = props => {
  const {
    name, image, extension, description,
  } = props;
  return (
    <Card>
      <Pic src={`${image}/${imageSize}.${extension}`} alt={`${name} Portrait`} />
      <Title>{name}</Title>
      <SubTitle>{description}</SubTitle>
    </Card>
  );
};

HeroCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  extension: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default HeroCard;
