import React from 'react';
import styled from 'styled-components';

import ViewerThumbnails from './ViewerThumbnails.jsx';

const Wrapper = styled.div`
  flex-basis: 65%;
  width: 50vw;
  display: flex;
  flex-direction: row;
  border: 2px solid #aeaeae;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  padding: 0;
  position: relative;
  z-index: 0;
`;

const ProductImages = ({ images, id }) => (
  <Wrapper>
    <ViewerThumbnails images={images} id={id} alt="" />
    <Image src={images[0].url} key={id} alt="style photograph" />
  </Wrapper>
);
export default ProductImages;
