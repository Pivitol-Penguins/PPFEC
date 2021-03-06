import React from 'react';
import styled from 'styled-components';

const NoSale = styled.p`
  margin: 0;
  margin-bottom: 1vh;
  font-weight: 300;
`;

const Discounted = styled.div`
  margin-bottom: 1vh;
  display: flex;
`;

const SaleReg = styled.p`
  margin: 0;
  font-weight: 300;
  text-decoration: line-through;
`;

const SalePrice = styled.p`
  margin: 0;
  padding-left: 1vw;
  font-weight: 300;
  color: red;
`;

const Price = ({ price, sale }) => {
  if (!sale) {
    return (
      <NoSale>{`$${Math.round(price)}`}</NoSale>
    );
  }
  return (
    <Discounted>
      <SaleReg>{`$${Math.round(price)}`}</SaleReg>
      <SalePrice>{`$${Math.round(sale)}`}</SalePrice>
    </Discounted>
  );
};

export default Price;
