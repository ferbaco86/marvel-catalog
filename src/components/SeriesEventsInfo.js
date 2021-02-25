import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import HeroCard from './HeroCard';

const SeriesEventsContainer = styled.div`
margin-top: 2rem;
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

// const {
//   name, image, extension,
// } = props;

const SeriesEventsInfo = props => {
  const {
    title,
  } = props;
  return (
    <>
      <SeriesEventsContainer>
        <SubTitle>
          {title}
        </SubTitle>
      </SeriesEventsContainer>
    </>
  );
};

SeriesEventsInfo.propTypes = {
  title: PropTypes.string.isRequired,
  //   // id: PropTypes.number.isRequired,
  // name: PropTypes.string.isRequired,
  // image: PropTypes.string.isRequired,
  // extension: PropTypes.string.isRequired,
};

export default SeriesEventsInfo;
