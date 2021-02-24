import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
width:25%;
text-align:center;
font-size: 30px;
font-family: monospace;
color:black;
border:2px solid lightgray;
background-color:${props => props.bgColor};
width:${props => (props.isWide ? '50%' : '25%')}`;

const Button = props => {
  const { name, wide, color } = props;
  const handleClick = () => {
    props.clickHandler();
  };

  return (
    <StyledButton bgColor={color} isWide={wide} type="button" onClick={() => handleClick(props.name)}>
      {name}
    </StyledButton>
  );
};

Button.defaultProps = { wide: false, color: '#E0E0E0' };
Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  wide: PropTypes.bool,
  color: PropTypes.string,
};

export default Button;
