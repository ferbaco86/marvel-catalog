import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import HeroCard from '../components/HeroCard';
import Pagination from '../components/Pagination';
import NavBar from '../components/NavBar';
import fetchData from '../api/fetchData';
import LoaderSpinner from '../components/LoaderSpinner';
import ErrorMessage from '../components/ErrorMessage';
import { incrementOffset } from '../actions/index';

const CardsContainer = styled.div`
display: flex;
flex-wrap: wrap;
padding: 2rem 6.5rem;
`;

const SearchBarContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
margin-top: 1.5rem`;

const SearchBar = styled.input`
padding: 0.5rem 1rem 0 1rem;
width: 50%;
font-family: 'Roboto Condensed', sans-serif;
font-size: 1.5rem;
border: none;
border-bottom: 3px solid black;
::placeholder,
::-webkit-input-placeholder {
  color: lightgray;
}
:-ms-input-placeholder {
   color: lightgray;
}
`;

const Catalog = () => {
  const { data, offset } = useSelector(state => state);
  const [currentPage, setCurrentPage] = useState(1);
  const [charsPerPage] = useState(56);
  const dispatch = useDispatch();

  const increaseOffset = () => {
    if (offset.offset < 1500) dispatch(incrementOffset(100));
  };

  useEffect(() => {
    dispatch(fetchData());
    increaseOffset();
  }, [offset]);

  const shouldComponentRender = () => {
    let isPending = false;
    if (data.pending === false || data.error !== null) {
      isPending = false;
    } else {
      isPending = true;
    }
    return isPending;
  };

  const charInfo = data.data;
  const indexOfLastChar = currentPage * charsPerPage;
  const indexOfFirstChar = indexOfLastChar - charsPerPage;
  const currentChars = charInfo.slice(indexOfFirstChar, indexOfLastChar);

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  };

  if (shouldComponentRender()) return <LoaderSpinner />;
  const errorText = `API Error: ${data.error}`;
  return (
    <>
      <NavBar />
      <SearchBarContainer>
        <SearchBar type="text" placeholder="SEARCH" />
      </SearchBarContainer>
      <CardsContainer>
        {data.error && (
        <ErrorMessage message={errorText} />
        )}
        {currentChars.map(char => (
          <HeroCard
            key={char.id}
            name={char.name}
            image={char.thumbnail.path}
            extension={char.thumbnail.extension}
          />
        ))}
      </CardsContainer>
      <Pagination charsPerPage={charsPerPage} totalChars={charInfo.length} paginate={paginate} />
      {/* {offset.offset < 1500 && (
      <Button name="Next" />)} */}
    </>
  );
};

export default Catalog;
