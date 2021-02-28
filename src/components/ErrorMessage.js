import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ErrorContainer = styled.div`
display: flex;
margin: 0 auto;`;

const ErrorText = styled.span`
color: ${props => props.textColor};
font-size: 2rem;
font-family: 'Roboto Condensed', sans-serif;
font-weight: 700;`;

const ErrorMessage = props => {
  const { message, color } = props;
  return (
    <ErrorContainer>
      <ErrorText textColor={color}>
        {' '}
        {message}
        {' '}
      </ErrorText>
    </ErrorContainer>
  );
};

ErrorMessage.defaultProps = { color: '#ec1d24' };
ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default ErrorMessage;
