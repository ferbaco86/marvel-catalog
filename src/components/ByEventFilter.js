import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Select = styled.select`
border: none;
padding-top: 0.5rem;
border-bottom: 3px solid black;
`;

const ByEventFilter = props => {
  const { filter } = props;
  const EVENTS = ['All', 'Secret Wars', 'Civil War', 'Spider-Verse', 'Onslaught', 'Mutant Massacre', 'House of M', 'Avengers VS X-Men', 'Secret Invasion', 'Fear Itself', 'Infinity'];
  return (
    <Select onChange={e => filter(e)}>
      {EVENTS.map(event => (
        <option key={event}>
          {event}
        </option>
      ))}
    </Select>

  );
};

ByEventFilter.propTypes = {
  filter: PropTypes.func.isRequired,
};

export default ByEventFilter;
