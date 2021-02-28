import React from 'react';
import styled from 'styled-components';

import ProductImages from './ProductImages.jsx';
import ProductOverview from './ProductOverview.jsx';
import Description from './Description.jsx';
import FeaturesList from './FeaturesList.jsx';

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 5px;
`;

const Product = ({ productDetails, productStyles }) => (
  <div>
    <div className="topLevel">
      <ProductImages images={productStyles} />
      <ProductOverview details={productDetails} styles={productStyles} />
    </div>
    <BottomWrapper>
      <Description info={productDetails} />
      <FeaturesList features={productDetails.features} />
    </BottomWrapper>
  </div>
);

export default Product;
