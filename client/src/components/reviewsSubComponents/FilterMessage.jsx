import React from 'react';
import styled from 'styled-components';

const ClickTag = styled.div`
  padding: 2px 1vw 0 1vw;
  text-decoration:underline;

  &:hover {
    cursor: pointer;
    color: #80CCC4;
    transform: scale(1.1);
  }

`;

const FilterMessage = (props) => (
  <div>
    <div>
      <span>Showing</span>
      {props.filter.map((star) => (
        <span key={star}>
          {star}
          {' '}
          stars
        </span>
      ))}
      <span>reviews</span>
    </div>
    <ClickTag onClick={props.handleRemoveLabelClick}>
      Remove All Filters
    </ClickTag>
  </div>
);

export default FilterMessage;
