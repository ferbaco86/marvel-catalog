import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const imageSize = 'detail';

const Container = styled.div`
display: flex;
flex-direction: column`;

const CoverImageContainer = styled.div`
position: relative;
width: 100%;
height: 54.5rem;
background-color: #ec1d24;
clip-path: polygon(0 0, 100% 0, 100% 72%, 0 81%);`;

const CoverImage = styled.div`
position: absolute;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 53rem;
background-image: url(${props => props.bgImage});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
border-bottom: 3px solid #ec1d24;
clip-path: polygon(0 0, 100% 0, 100% 72%, 0 81%);
&:after {
  position: absolute;
  content: "";
  width: 100%;
  top: 0;
  bottom: 0;
  background-color: black;
  opacity: 0.5;
}`;

const Title = styled.h1`
color: white;
padding: 1rem;
font-family: 'Roboto Condensed', sans-serif;
font-weight: 700;
font-size: 5rem;
text-align: center;
z-index: 1`;

const Description = styled.p`
font-size: 1.2rem;
color: #202020`;

const CharInfo = props => {
  const {
    name, image, extension, description,
  } = props;

  return (
    <Container>
      <CoverImageContainer>
        <CoverImage bgImage={`${image}/${imageSize}.${extension}`} alt={`${name} Cover`}>
          <Title>{name}</Title>
        </CoverImage>
      </CoverImageContainer>
      <Description>{description}</Description>
    </Container>
  );
};

CharInfo.propTypes = {
  // id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  extension: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CharInfo;
