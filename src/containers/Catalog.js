import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import HeroCard from '../components/HeroCard';
import Pagination from '../components/Pagination';
import fetchData from '../api/fetchData';
import LoaderSpinner from '../components/LoaderSpinner';
import ErrorMessage from '../components/ErrorMessage';
import {
  incrementOffset, filterByName, filterByEvent,
  resetFilter,
} from '../actions/index';
import CoverImage from '../components/CoverImage';
import ByEventFilter from '../components/ByEventFilter';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import store from '../reducers/index';

const CardsContainer = styled.div`
display: flex;
flex-wrap: wrap;
padding: 0 6.5rem;
margin-top: -5rem;
justify-content: center;
@media screen and (max-width: 1200px) {
  padding: 4rem;
}
@media screen and (max-width: 800px) {
  flex-direction: column;
}
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
margin-bottom: 6.5rem;
@media screen and (max-width: 800px) {
  flex-direction: column;
  width: 100%;
}`;

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
justify-content: space-between;
width: 100%;
padding: 1rem;
margin-bottom: 3rem;
@media screen and (max-width: 800px) {
  flex-direction: column;
  }`;

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
@media screen and (max-width: 800px) {
  width: 100%;
  }
`;

const FilterContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
@media screen and (max-width: 800px) {
  flex-direction: column;
  margin-top: 3rem;
  }`;

const FilterText = styled.span`
font-size: 1rem;
color: #202020;
margin-right: 2rem;
@media screen and (max-width: 800px) {
  margin-right: 0;
  margin-bottom: 3rem;
  }`;

const Catalog = () => {
  const { data, offset, filter } = useSelector(state => state);
  const [currentPage, setCurrentPage] = useState(1);
  const [isActive, setActive] = useState(false);
  const [charsPerPage] = useState(56);
  const dispatch = useDispatch();
  const { filteredChars } = filter;
  const increaseOffset = () => {
    if (offset.offset < 1500) dispatch(incrementOffset(100));
  };

  useEffect(() => {
    if (store.getState().data.data.length === 0) {
      dispatch(fetchData());
      increaseOffset();
    }
  }, [offset]);

  useEffect(() => {
    dispatch(resetFilter());
  }, []);

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
  const sortedCharInfo = charInfo.sort((a, b) => a.name.localeCompare(b.name));
  const indexOfLastChar = currentPage * charsPerPage;
  const indexOfFirstChar = indexOfLastChar - charsPerPage;
  const currentChars = sortedCharInfo.slice(indexOfFirstChar, indexOfLastChar);

  const filterByInput = e => {
    const input = e.target.value;
    dispatch(filterByName(input, charInfo));
  };

  const filterBySelect = e => {
    const option = e.target.value;
    dispatch(filterByEvent(option, charInfo));
  };

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
    setActive(!isActive);
  };

  if (shouldComponentRender()) return <LoaderSpinner />;
  const errorText = `API Error: ${data.error}`;
  return (
    <>
      <NavBar />
      <CoverImage name="MARVEL CATALOG" imageURL="https://imgur.com/8ti09tn.jpg" subtitle="Browse through more than 1000 Marvel Characters!" />
      <CardsContainer>
        <SearchBarContainer>
          <SearchBar onChange={e => { filterByInput(e); }} type="text" placeholder="SEARCH BY NAME" />
          <FilterContainer>
            <FilterText>Filter by Event</FilterText>
            <ByEventFilter filter={filterBySelect} />
          </FilterContainer>
        </SearchBarContainer>
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
                    url={`character/${char.id}`}

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
            url={`character/${char.id}`}
          />
        ))}
      </CardsContainer>
      <Pagination
        charsPerPage={charsPerPage}
        totalChars={charInfo.length}
        paginate={paginate}
        currentPage={currentPage}
      />
      <Footer />
    </>
  );
};

export default Catalog;
