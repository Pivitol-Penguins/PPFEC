import React from 'react';
import styled from 'styled-components';

const NoSale = styled.p`
  margin-bottom: 1vh;
  font-weight: 300;
`;

const Discounted = styled.div`
  margin-bottom: 1vh;
  display: flex;
`;

const SaleReg = styled.p`
  font-weight: 300;
  text-decoration: line-through;
`;

const SalePrice = styled.p`
  font-weight: 300;
  color: red;
`;

const Price = ({ price, sale }) => {
  if (!sale) {
    return (
      <NoSale>{`$${Math.round(price)}`}</NoSale>
    );
  } else {
    return (
      <Discounted>
        <SaleReg>{`$${Math.round(price)}`}</SaleReg>
        <SalePrice>{`$${Math.round(sale)}`}</SalePrice>
      </Discounted>
    );
  }
};

export default Price;
