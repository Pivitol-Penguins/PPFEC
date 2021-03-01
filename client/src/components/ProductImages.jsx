import React from 'react';
import styled from 'styled-components';

import Thumbnails from './Thumbnails.jsx';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const ProductImages = ({ images }) => (
  <Wrapper>
    <Thumbnails images={images.results} />
    <img src={images.results[0].photos[0].url} alt="style photograph" width="200" height="300" />
  </Wrapper>
);

export default ProductImages;
