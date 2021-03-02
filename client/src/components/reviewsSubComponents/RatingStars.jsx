import React from 'react';
import styled from 'styled-components';

const StarsContainer = styled.div`
  unicode-bidi: bidi-override;
  color: #c5c5c5;
  font-size: 22px;
  height: 22px;
  line-height: 22px;
  position: relative;
  padding: 0;
  text-shadow: 0px 1px 0 #a2a2a2;

  &.top {
    width: ${({ percent }) => percent}%;
    color: #e7711b;
    padding: 0;
    position: absolute;
    z-index: 1;
    display: block;
    top: 0;
    left: 0;
    overflow: hidden;
  }

  &.bottom {
    padding: 0;
    display: block;
    z-index: 0;
  }
`;

const RatingStars = (props) => (
  <StarsContainer>
    <StarsContainer className="top" percent={props.percent}>
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span>★</span>
    </StarsContainer>
    <StarsContainer className="bottom">
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span>★</span>
    </StarsContainer>
  </StarsContainer>

);

export default RatingStars;
