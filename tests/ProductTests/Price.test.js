/* eslint-disable no-undef */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { mount } from 'enzyme';

import Price from '../../client/src/components/ProductSubs/Price.jsx';
import ProductTestData from '../ProductTestData.js';

describe('Price rendering', () => {
  const props = {
    price: ProductTestData.productStyles.results[0].original_price,
    sale: ProductTestData.productStyles.results[0].sale_price,
  };

  const PriceComponent = mount(<Price {...props} debug />);
  const text = (PriceComponent.find('p').text());

  it('Should render correctly', () => {
    expect(PriceComponent).toMatchSnapshot();
  });

  it('render the price correctly', () => {
    expect(text).toEqual('$40');
  });
});

describe('Price rendering', () => {
  const props = {
    price: ProductTestData.productStyles.results[2].original_price,
    sale: ProductTestData.productStyles.results[2].sale_price,
  };
  const PriceComponent = mount(<Price {...props} debug />);
  const RegPrice = (PriceComponent.find('p').at(0).text());
  const SalePrice = (PriceComponent.find('p').at(1).text());

  it('Should render correctly', () => {
    expect(PriceComponent).toMatchSnapshot();
  });

  it('render the regular price correctly', () => {
    expect(RegPrice).toEqual('$40');
  });

  it('render the sale price correctly', () => {
    expect(SalePrice).toEqual('$35');
  });
});
