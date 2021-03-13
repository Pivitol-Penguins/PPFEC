/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';
import Photo from './Photo.jsx';

const Wrapper = styled.div`
  display: flex;

`;

const Photos = (props) => (
  <Wrapper>
    {props.photos.map((photo, i) => <Photo src={photo} alt={photo} key={photo + i} />)}
  </Wrapper>
);
export default Photos;
