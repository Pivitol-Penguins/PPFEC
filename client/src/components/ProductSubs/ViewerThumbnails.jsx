import React from 'react';
import styled from 'styled-components';

const Thumbs = styled.div`
  z-index: 10;
  position: absolute;
  left: 17vw; top: 10vh; right: 0; bottom: 0;
  width: 8vw;
  display: flex;
  flex-direction: column;
  margin: 0;
`;

const ViewerThumbnails = ({ images }) => (
  <Thumbs>
    { images.map((image) => <img key={image.style_id} src={image.photos[0].thumbnail_url} alt="" width="70px" height="70px" />)}
  </Thumbs>
);

export default ViewerThumbnails;
