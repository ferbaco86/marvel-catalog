import styled, { keyframes } from 'styled-components';

const ringAnimation = keyframes`
 0% { transform: rotate(0deg); }
 100% { transform: rotate(360deg); }`;

const SpinnerContainer = styled.div`
 display: flex;
 height: 100vh;
 justify-content: center;
 align-items: center;`;

const Spinner = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #ec1d24;
    border-color: #f78f3f transparent #ec1d24 transparent;
    animation: ${ringAnimation} 1.2s linear infinite;
  }`;
const LoaderSpinner = () => (
  <SpinnerContainer>
    LOADING
    <Spinner />
  </SpinnerContainer>
);

export default LoaderSpinner;
