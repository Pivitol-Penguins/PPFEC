/* eslint-disable no-undef */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { mount } from 'enzyme';
import styled from 'styled-components';

import Price from '../../client/src/components/ProductSubs/Price.jsx';

const NoSale = styled.p`
  margin: 0;
  margin-bottom: 1vh;
  font-weight: 300;
`;

describe('Price rendering', () => {
  const props = {
    price: 40,
    sale: null,
  };
  const PriceComponent = mount(<Price {...props} debug />);
  const text = (PriceComponent.find('p').text());

  it('Should render correctly', () => {
    expect(PriceComponent).toMatchSnapshot();
  });

  it('render the price correctly', () => {
    expect(text).toEqual("$40");
  });
});

describe('Price rendering', () => {
  const props = {
    price: 40,
    sale: 30,
  };
  const PriceComponent = mount(<Price {...props} debug />);
  const RegPrice = (PriceComponent.find('p').at(0).text());
  const SalePrice = (PriceComponent.find('p').at(1).text());

  it('Should render correctly', () => {
    expect(PriceComponent).toMatchSnapshot();
  });

  it('render the regular price correctly', () => {
    expect(RegPrice).toEqual("$40");
  });

  it('render the sale price correctly', () => {
    expect(SalePrice).toEqual("$30");
  });
});