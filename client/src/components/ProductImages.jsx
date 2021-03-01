import React from 'react';

const ProductImages = ({ images }) => (
  <div>
    <div>product images</div>
    <img src={images.results[0].photos[0].url} alt="style photograph" width="200" height="300" />
  </div>
);

export default ProductImages;
