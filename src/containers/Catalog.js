import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import HeroCard from '../components/HeroCard';
import Pagination from '../components/Pagination';
import NavBar from '../components/NavBar';
import fetchData from '../api/fetchData';
import LoaderSpinner from '../components/LoaderSpinner';
import ErrorMessage from '../components/ErrorMessage';
import { incrementOffset, filterByName } from '../actions/index';

const CardsContainer = styled.div`
display: flex;
flex-wrap: wrap;
padding: 2rem 6.5rem;
justify-content: center;
`;

const SearchResults = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
flex-direction: column;
border-bottom: 3px solid black;
`;

const SearchResultsContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
`;

const SearchTitle = styled.h1`
font-size: 2rem;
letter-spacing: 1px;
text-transform: uppercase;
font-weight: 700;
font-family: 'Roboto Condensed', sans-serif;
color: #999;`;

const CharsTitle = styled.h1`
font-family: 'Roboto Condensed', sans-serif;
letter-spacing: 1px;
margin-top: 2rem;
text-transform: uppercase;
font-size: 2rem;
color: #202020;
width: 100%;
font-weight: 700;`;

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
  const { data, offset, filter } = useSelector(state => state);
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
  const { filteredChars } = filter;
  const indexOfLastChar = currentPage * charsPerPage;
  const indexOfFirstChar = indexOfLastChar - charsPerPage;
  const currentChars = charInfo.slice(indexOfFirstChar, indexOfLastChar);

  const filterByInput = e => {
    const input = e.target.value;
    dispatch(filterByName(input, charInfo));
  };

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  };

  if (shouldComponentRender()) return <LoaderSpinner />;
  const errorText = `API Error: ${data.error}`;
  return (
    <>
      <NavBar />
      <SearchBarContainer>
        <SearchBar onChange={e => { filterByInput(e); }} type="text" placeholder="SEARCH" />
      </SearchBarContainer>
      <CardsContainer>
        {
          filteredChars && filteredChars.length > 0 && (
            <SearchResults>
              <SearchTitle>Search Results</SearchTitle>
              <SearchResultsContainer>
                {filteredChars.map(char => (
                  <HeroCard
                    key={char.id}
                    name={char.name}
                    image={char.thumbnail.path}
                    extension={char.thumbnail.extension}
                  />
                ))}
              </SearchResultsContainer>
            </SearchResults>
          )
        }
        <CharsTitle>Marvel Characters List</CharsTitle>
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
    </>
  );
};

export default Catalog;
