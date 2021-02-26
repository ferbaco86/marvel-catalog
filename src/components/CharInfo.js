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

const DescriptionContainer = styled.div`
margin-top: -8rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;`;

const SubTitle = styled.h3`
color: #202020;
padding: 1rem;
text-transform: uppercase;
font-family: 'Roboto Condensed', sans-serif;
line-spacing: 1px;
font-size: 2rem;
text-align: center;`;

const Description = styled.p`
font-size: 1.2rem;
color: #202020;
padding: 3rem;
text-align: center;`;

const MoreInfoLink = styled.a`
font-size: 1.3rem;
text-decoration: underline;
color: #ec1d24`;

const CharInfo = props => {
  const {
    name, image, extension, description, url,
  } = props;

  let descriptionText = '';

  if (description === '') {
    descriptionText = 'No description provided';
  } else {
    descriptionText = description;
  }
  return (
    <Container>
      <CoverImageContainer>
        <CoverImage bgImage={`${image}/${imageSize}.${extension}`} alt={`${name} Cover`}>
          <Title>{name}</Title>
        </CoverImage>
      </CoverImageContainer>
      <DescriptionContainer>
        <SubTitle>Description</SubTitle>
        <Description>{descriptionText}</Description>
        <MoreInfoLink href={url} target="_blank">More Info</MoreInfoLink>
      </DescriptionContainer>
    </Container>
  );
};

CharInfo.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  extension: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default CharInfo;
