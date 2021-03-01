import React from 'react';
import styled from 'styled-components';

import Styles from './StylesComponent.jsx';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`;

const Category = styled.p`
  margin-top: 10px;
  font-weight: thin;
`;

const Name = styled.h1`
  line-height: 0;
  margin-bottom: 10px;
  font-weight: bold;
`;

const Price = styled.p`
  margin-top: 25px;
  margin-bottom: 10px;
  font-weight: thin;
`;

const ProductOverview = ({ details, styles }) => (
  <Wrapper>
    <div className="productInfo">
      <div>Ratings component will go here</div>
      <Category>{details.category.toUpperCase()}</Category>
      <Name>{details.name}</Name>
      <Price>{`$${details.default_price}`}</Price>
    </div>
    <Styles styles={styles} />
    <button type="button">Buttons and size selectors go here</button>
  </Wrapper>
);

export default ProductOverview;
