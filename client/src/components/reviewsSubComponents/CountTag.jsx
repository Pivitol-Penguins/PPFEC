import React from 'react';
import styled from 'styled-components';

const StyledTag = styled.div`
  width: 10px;
  height: 2px;
  background: #80ccc4;
`;

const CountTag = (props) => (
  <StyledTag>
    {props.ratingCount}
    {' '}
    people voted
  </StyledTag>
);

export default CountTag;
