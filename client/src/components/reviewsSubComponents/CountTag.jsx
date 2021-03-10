import React from 'react';
import styled from 'styled-components';

const StyledTag = styled.div`
  width: 100%;
  height: 100%;
  font-size: 10px;
  text-align: center;
  border-radius: 6px;
  border: 0.3px solid #424242
  position: absolute
  top: 0;
  left: 50%;
  z-index: 1;
  margin-left: -60px;
`;

const CountTag = (props) => {
  let ratingCount;
  if (props.ratingCount === undefined) {
    ratingCount = 0;
  } else {
    ratingCount = props.ratingCount;
  }
  return (
    <StyledTag>
      <p>
        {ratingCount}
        {' '}
        people voted
      </p>
    </StyledTag>
  );
};

export default CountTag;
