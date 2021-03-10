/* eslint-disable no-undef */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { mount } from 'enzyme';

import ProductOverview from '../../client/src/components/ProductSubs/ProductOverview.jsx';
import ProductTestData from '../ProductTestData.js';

const props = {
  details: {
    category: ProductTestData.productDetails.category, name: ProductTestData.productDetails.name,
  },
  skus: ProductTestData.productStyles.results[0].skus,
  styles: ProductTestData.productStyles,
};

describe('ProductOverview', () => {
  const ProductOverviewComponent = mount(<ProductOverview {...props} debug />);

  it('Should render correctly', () => {
    expect(ProductOverviewComponent).toMatchSnapshot();
  });
});
