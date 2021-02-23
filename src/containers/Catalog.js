import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import HeroCard from '../components/HeroCard';
import NavBar from '../components/NavBar';
import fetchData from '../api/fetchData';
import LoaderSpinner from '../components/LoaderSpinner';
import Button from '../components/Button';
import ErrorMessage from '../components/ErrorMessage';

const CardsContainer = styled.div`
display: flex;
flex-wrap: wrap;
padding: 2rem 6.5rem;
`;

const Catalog = () => {
  const { data } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
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

  if (shouldComponentRender()) return <LoaderSpinner />;
  const errorText = `API Error: ${data.error}`;

  return (
    <>
      <NavBar />
      <CardsContainer>
        {data.error && (
        <ErrorMessage message={errorText} />
        )}
        {charInfo.map(char => (
          <HeroCard
            key={char.id}
            name={char.name}
            image={char.thumbnail.path}
            extension={char.thumbnail.extension}
          />
        ))}
      </CardsContainer>
      <Button name="Next" />
    </>
  );
};

export default Catalog;