import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
  }
@media screen and (max-width: 1200px) {
    flex: 0 0 30%;
  }
@media screen and (max-width: 800px) {
  width: 100%;
  align-self: center;
  }
}`;

const Title = styled.h1`
color: white;
padding: 1rem;
font-family: 'Roboto Condensed', sans-serif;
font-weight: 700;
text-align: center;

@media screen and (max-width: 800px) {
  width: min-content;
  text-align: center;
  margin: 0 auto;
  }`;

const Pic = styled.img`
border-bottom: 5px solid #ec1d24;
@media screen and (max-width: 800px) {
  width: 100%;
  }
`;

const StyledLink = styled(Link)`
text-decoration: none;
@media screen and (max-width: 800px) {
  width: 100%;
  }`;

const HeroCard = props => {
  const {
    name, image, extension, url,
  } = props;

  return (
    <Card>
      <StyledLink to={url}>
        <Pic src={`${image}/${imageSize}.${extension}`} alt={`${name} Portrait`} />
        <Title>{name}</Title>
      </StyledLink>
    </Card>
  );
};

HeroCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  extension: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default HeroCard;
