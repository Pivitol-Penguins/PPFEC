import React from 'react';
import styled from 'styled-components';

import ProductImages from './ProductSubs/ProductImages.jsx';
import ProductOverview from './ProductSubs/ProductOverview.jsx';
import Description from './ProductSubs/Description.jsx';
import FeaturesList from './ProductSubs/FeaturesList.jsx';

const TopWrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: row;
  padding-top: 5px;
`;

const BottomWrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: row;
  padding-top: 5px;
`;

const Product = ({ productDetails, productStyles }) => (
  <div>
    <TopWrapper>
      <ProductImages images={productStyles} />
      <ProductOverview details={productDetails} styles={productStyles} />
    </TopWrapper>
    <BottomWrapper>
      <Description info={productDetails} />
      <FeaturesList features={productDetails.features} />
    </BottomWrapper>
  </div>
);

export default Product;
