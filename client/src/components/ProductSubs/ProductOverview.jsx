import React from 'react';
import styled from 'styled-components';

import Styles from './StylesComponent.jsx';
import Selectors from './Selectors.jsx';

const Wrapper = styled.div`
  flex_basis 40%;
  display: flex;
  margin-top: 5vh;
  flex-direction: column;
  padding-left: 10px;
`;

const Category = styled.p`
  margin-top: 5vh;
  font-weight: thin;
`;

const Name = styled.h1`
  line-height: 0;
  margin-bottom: 1vh;
  font-weight: bold;
`;

const Price = styled.p`
  margin-top: 5vh;
  margin-bottom: 1vh;
  font-weight: thin;
`;

const PurchaseLikeButtons = styled.div`
  width: 100%;
  display: flex;
  margin-top: 10px;
  flex-direction: row;
`;

const AddToCart = styled.button`
  flex-basis 80%;
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  width: 15vw;
  height: 5vh;
  padding: 0 1.25vw;
  background: none;
  border: 1px solid #424242;
  color: #424242;
`;

const Like = styled.button`
  flex-basis 20%;
  height: ${AddToCart.height};
  min-width: ${AddToCart.height};
  margin-left: 1vw;
  font-weight: bold;
  background: none;
  border: 1px solid #424242;
  color: #424242;
  &:hover { color: #80ccc4; };
`;

const ProductOverview = ({
  details, styles, skus, getStyleID,
}) => (
  <Wrapper>
    <div>Ratings component will go here</div>
    <div className="productInfo">
      <Category>{details.category.toUpperCase()}</Category>
      <Name>{details.name}</Name>
      <Price>{`$${details.default_price}`}</Price>
    </div>
    <Styles styles={styles} getStyleID={getStyleID} />
    <Selectors skus={skus} />
    <PurchaseLikeButtons>
      <AddToCart>
        <div>ADD TO BAG</div>
        <div>+</div>
      </AddToCart>
      <Like>☆</Like>
    </PurchaseLikeButtons>
  </Wrapper>
);

export default ProductOverview;
