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

const FilterMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 5px
`;

const FilterMessage = (props) => (
  <FilterMessageContainer>
    <div>
      <span>Showing all </span>
      {props.filter.map((star, index) => {
        if (index > 0 && index !== props.filter.length - 1) {
          return (
            <span key={star}>
              ,
              {star}
            </span>
          );
        }
        if (index > 0 && index === props.filter.length - 1) {
          return (
            <span key={star}>
              {' '}
              &
              {star}
            </span>
          );
        }
        return (
          <span key={star}>
            {star}
          </span>
        );
      })}
      <span> star reviews</span>
    </div>
    <ClickTag onClick={props.handleRemoveLabelClick}>
      Remove All Filters
    </ClickTag>
  </FilterMessageContainer>
);

export default FilterMessage;
