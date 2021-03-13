/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';

const Photo = styled.img`
  height: 10vh;
  weight: 10vw;
  margin: 0 1vw 1vh 0;
  border: 1px solid #424242;
  &:hover {
    transform: scale(1.1);
    border: 1px solid #80CCC4;
    box-shadow: 0 3px 6px #a0a0a0, 0 3px 6px #a0a0a0;
  }
`;

const Photos = (props) => (
  <div>
    {props.photos.map((photo, i) => <Photo src={photo} alt={photo} key={photo + i} />)}
  </div>
);
export default Photos;
