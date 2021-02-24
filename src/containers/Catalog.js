import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import HeroCard from '../components/HeroCard';
import Pagination from '../components/Pagination';
import NavBar from '../components/NavBar';
import fetchData from '../api/fetchData';
import LoaderSpinner from '../components/LoaderSpinner';
// import Button from '../components/Button';
import ErrorMessage from '../components/ErrorMessage';
import { incrementOffset } from '../actions/index';

const CardsContainer = styled.div`
display: flex;
flex-wrap: wrap;
padding: 2rem 6.5rem;
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
