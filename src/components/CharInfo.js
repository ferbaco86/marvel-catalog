import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CoverImage from './CoverImage';

const imageSize = 'detail';

const Container = styled.div`
display: flex;
flex-direction: column`;

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
      <CoverImage name={name} imageURL={`${image}/${imageSize}.${extension}`} />
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
