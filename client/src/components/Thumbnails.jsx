import React from 'react';
import styled from 'styled-components';

const Thumbs = styled.div`
  display: flex;
  flex-direction: column;
`;

const Thumbnails = ({ images }) => (
  <Thumbs>
    { images.map((image) => <img key={image.style_id} src={image.photos[0].thumbmail_url} alt="" width="100" height="100" />)}
  </Thumbs>
);

export default Thumbnails;
