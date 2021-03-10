/* eslint-disable no-undef */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { mount } from 'enzyme';
import Product from '../client/src/components/Product.jsx';
import ProductTestData from './ProductTestData.js';

const props = {
  productDetails: ProductTestData.productDetails,
  productStyles: ProductTestData.productStyles,
};

describe('Product', () => {
  it('should render correctly in "debug" mode', () => {
    const ProductComponent = mount(<Product {...props} debug />);

    expect(ProductComponent).toMatchSnapshot();
  });
});
