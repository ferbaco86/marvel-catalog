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
import ErrorMessage from '../components/ErrorMessage';
import Footer from '../components/Footer';

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

  const errorText = `API Error: ${detail.error}`;

  return (
    <>
      <NavBar />
      <Container>
        {detail.error && (
        <ErrorMessage message={errorText} />
        )}
        { detail.detail[0] && (
          <>
            <CharInfo
              key={detail.detail[0].id}
              id={detail.detail[0].id}
              name={detail.detail[0].name}
              description={detail.detail[0].description}
              image={detail.detail[0].thumbnail.path}
              extension={detail.detail[0].thumbnail.extension}
              url={detail.detail[0].urls[0].url}
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
        )}
      </Container>
      <Footer />
    </>
  );
};
CharDetail.propTypes = {
  match: PropTypes.shape(
    { params: PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired },
  ).isRequired,
};

export default CharDetail;
