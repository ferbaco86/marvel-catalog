import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// const imageSize = 'detail';

const CoverImageContainerBG = styled.div`
position: relative;
width: 100%;
height: 54.5rem;
background-color: #ec1d24;
clip-path: polygon(0 0, 100% 0, 100% 72%, 0 81%);`;

const CoverImageContainer = styled.div`
position: absolute;
display: flex;
flex-direction:column;
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
z-index: 1;
@media screen and (max-width: 800px) {
 font-size: 4rem;
  }`;

const SubTitle = styled.h3`
color: white;
padding: 1rem;
font-size: 2rem;
text-align: center;
z-index: 1`;

const CoverImage = props => {
  const { name, imageURL, subtitle } = props;
  return (
    <CoverImageContainerBG>
      <CoverImageContainer bgImage={imageURL} alt={`${name} Cover`}>
        <Title>{name}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </CoverImageContainer>
    </CoverImageContainerBG>
  );
};

CoverImage.defaultProps = {
  subtitle: '',
};

CoverImage.propTypes = {
  name: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default CoverImage;
