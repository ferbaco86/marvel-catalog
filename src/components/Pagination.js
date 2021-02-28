import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PaginationContainer = styled.ul`
display: flex;
width: 100%;
padding-bottom: 2rem!important;
flex-wrap: wrap;
justify-content: center;
align-items: center;
list-style-type: none;`;

const PaginationItem = styled.li`
border-width: 2px;
border-style: solid;
border-bottom-color: ${props => (props.currentPage === props.number ? '#ec1d24' : 'none')};
margin: 0.2rem;
font-family: 'Roboto Condensed', sans-serif;
`;

const PaginationButton = styled.button`
background: none;
border: none;
cursor: pointer;
&:hover {
  color: #ec1d24;
}`;

const Pagination = props => {
  const {
    charsPerPage, totalChars, paginate, currentPage,
  } = props;
  const pageNumbers = [];

  for (let index = 1; index <= Math.ceil(totalChars / charsPerPage); index += 1) {
    pageNumbers.push(index);
  }
  return (
    <PaginationContainer>
      {pageNumbers.map(number => (
        <PaginationItem
          key={number}
          currentPage={currentPage}
          number={number}
        >
          <PaginationButton type="button" onClick={() => { paginate(number); }}>
            {number}
          </PaginationButton>
        </PaginationItem>
      ))}
    </PaginationContainer>
  );
};

Pagination.propTypes = {
  charsPerPage: PropTypes.number.isRequired,
  totalChars: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Pagination;
