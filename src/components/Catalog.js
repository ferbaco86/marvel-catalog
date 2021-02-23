import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import HeroCard from './HeroCard';
import NavBar from './NavBar';
import fetchData from '../api/fetchData';
import LoaderSpinner from './LoaderSpinner';

const CardsContainer = styled.div`
display: flex;
flex-wrap: wrap;
padding: 2rem 6.5rem;
`;

const Catalog = () => {
  const { data, pending, error } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const shouldComponentRender = () => {
    let isPending = false;
    if (pending === false) {
      isPending = false;
    } else {
      isPending = true;
    }
    return isPending;
  };

  const charInfo = data.data;

  if (!shouldComponentRender()) return <LoaderSpinner />;

  return (
    <>
      <NavBar />
      <CardsContainer>
        {error && <span>{error}</span>}
        {charInfo.map(char => <HeroCard key={char.id} name={char.name} />)}
      </CardsContainer>
    </>
  );
};

export default Catalog;
