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

const ProductImages = ({ images, id }) => (
  <Wrapper>
    <ViewerThumbnails images={images} id={id} alt="" />
    <Image src={images[0].url} key={id} alt="style photograph" height="70vh" />
  </Wrapper>
);
export default ProductImages;
