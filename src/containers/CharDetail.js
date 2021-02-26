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

const Container = styled.div`
display: flex;
flex-direction: column;
`;

const SeriesEventsContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
padding: 0 6.5rem;`;

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
              url={char.urls[0].url}
            />
            <SeriesEventsInfo title="Latest Series" />
            <SeriesEventsContainer>
              { detail.series.map(serie => (
                <HeroCard
                  key={serie.id}
                  name={serie.title}
                  image={serie.thumbnail.path}
                  extension={serie.thumbnail.extension}
                  url={serie.urls[0].url}
                />
              ))}
            </SeriesEventsContainer>
            <SeriesEventsInfo title="Latest Events" />
            <SeriesEventsContainer>
              { detail.events.map(event => (
                <HeroCard
                  key={event.id}
                  name={event.title}
                  image={event.thumbnail.path}
                  extension={event.thumbnail.extension}
                  url={event.urls[0].url}
                />
              ))}
            </SeriesEventsContainer>
          </>
        )))}
      </Container>
    </>
  );
};
CharDetail.propTypes = {
  match: PropTypes.number.isRequired,
};

export default CharDetail;
