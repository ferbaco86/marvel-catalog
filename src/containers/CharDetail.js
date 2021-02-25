import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { fetchCharID } from '../actions/index';
import fetchCharDetail from '../api/fetCharDetail';
import LoaderSpinner from '../components/LoaderSpinner';
import CharInfo from '../components/CharInfo';
import NavBar from '../components/NavBar';
import SeriesEventsInfo from '../components/SeriesEventsInfo';
import HeroCard from '../components/HeroCard';

// const WebDisplay = styled.iframe`
// width: 500px;
// height: 500px;`;

const Container = styled.div`
display: flex;
flex-direction: column;
padding: 5rem;`;

const SeriesContainer = styled.div`
display: flex;
flex-wrap: wrap;`;

const CharDetail = props => {
  const { match } = props;
  const { detail } = useSelector(state => state);
  const dispatch = useDispatch();

  const getCharID = () => {
    dispatch(fetchCharID(match.params.id));
  };

  useEffect(() => {
    getCharID();
    dispatch(fetchCharDetail());
  }, []);

  const shouldComponentRender = () => {
    let isPending = false;
    if (detail.pending === false || detail.error !== null) {
      isPending = false;
    } else {
      isPending = true;
    }
    return isPending;
  };

  if (shouldComponentRender()) return <LoaderSpinner />;

  return (
    <>
      <NavBar />
      <Container>
        { detail.id && (detail.detail.map(char => (
          <>
            <CharInfo
              key={char.id}
              id={char.id}
              name={char.name}
              description={char.description}
              image={char.thumbnail.path}
              extension={char.thumbnail.extension}
            />
            <SeriesEventsInfo title="Latest Series" />
            <SeriesContainer>
              { detail.series.map(serie => (
                <HeroCard
                  key={serie.id}
                  name={serie.title}
                  image={serie.thumbnail.path}
                  extension={serie.thumbnail.extension}
                  url="https://www.google.cl"
                />
              ))}
            </SeriesContainer>
            <SeriesEventsInfo title="Latest Events" />

          </>
        // <WebDisplay title={char.name} src={char.urls[0].url} sandbox="" />
        )))}
      </Container>
    </>
  );
};
CharDetail.propTypes = {
  match: PropTypes.number.isRequired,
};

export default CharDetail;
