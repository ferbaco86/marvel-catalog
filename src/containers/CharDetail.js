import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
// import styled from 'styled-components';
import { fetchCharID } from '../actions/index';
import fetchCharDetail from '../api/fetCharDetail';
import LoaderSpinner from '../components/LoaderSpinner';
import CharInfo from '../components/CharInfo';
import NavBar from '../components/NavBar';

// const WebDisplay = styled.iframe`
// width: 500px;
// height: 500px;`;

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

  detail.detail.map(char => console.log(char));

  return (
    <>
      <NavBar />
      <div>
        { detail.id && (detail.detail.map(char => (
          <CharInfo
            key={char.id}
            id={char.id}
            name={char.name}
            description={char.description}
            image={char.thumbnail.path}
            extension={char.thumbnail.extension}
          />
        // <WebDisplay title={char.name} src={char.urls[0].url} sandbox="" />
        )))}
      </div>
    </>
  );
};
CharDetail.propTypes = {
  match: PropTypes.number.isRequired,
};

export default CharDetail;
