import React from 'react';
import styled from 'styled-components';

import ViewerThumbnails from './ViewerThumbnails.jsx';

const Wrapper = styled.div`
  flex_basis 60%;
  display: flex;
  flex-direction: row;
`;

const Image = styled.img`
  width: 100%;
  height: 80vh;
  padding: 0;
  object-fit: contain;
  position: relative;
  z-index: 0;
`;

const ProductImages = ({ images }) => (
  <Wrapper>
    <ViewerThumbnails images={images.results} />
    <Image src={images.results[0].photos[0].url} alt="style photograph" />
  </Wrapper>
);

export default ProductImages;
