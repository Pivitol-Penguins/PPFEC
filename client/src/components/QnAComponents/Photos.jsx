import React from 'react';
import styled from 'styled-components';

const Photo = styled.img`
  height: 10vh;
  weight: 10vw;
  margin: 0 1vw 1vh 0;
  border: 2px solid #424242;
  &:hover {
    transform: scale(1.75);
  }
`;

const Photos = (props) => (
  <div>
    {props.photos.map((photo) => <Photo src={photo} alt={photo} key={photo} />)}
  </div>
);
export default Photos;
