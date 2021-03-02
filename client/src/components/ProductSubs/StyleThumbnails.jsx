import React from 'react';
import styled from 'styled-components';

const Thumbs = styled.div`
flex-basis: 90%
display: flex;
  flex-wrap: wrap;
  margin: 0;
`;

const Image = styled.img`
  flex: 1 0 21%;
  margin: 5px;
  border-radius: 100%;
`;

const StyleThumbnails = ({ images }) => (
  <Thumbs>
    { images.map((image) => <Image key={image.style_id} src={image.photos[0].thumbnail_url} alt="" width="70" height="70" />)}
  </Thumbs>
);

export default StyleThumbnails;
