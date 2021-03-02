import React from 'react';
import styled from 'styled-components';

const Thumbs = styled.div`
  width: 8vw;
  display: flex;
  flex-direction: column;
  margin: 0;
`;

const ViewerThumbnails = ({ images }) => (
  <Thumbs>
    { images.map((image) => <img key={image.style_id} src={image.photos[0].thumbnail_url} alt="" width="70" height="70" />)}
  </Thumbs>
);

export default ViewerThumbnails;
