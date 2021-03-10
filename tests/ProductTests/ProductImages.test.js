/* eslint-disable no-undef */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { mount } from 'enzyme';

import ProductImages from '../../client/src/components/ProductSubs/ProductImages.jsx';
import ProductTestData from '../ProductTestData.js';

const props = {
  index: 0,
  images: ProductTestData.productStyles.results[0].photos,
};

describe('ProductImages', () => {
  const ProductImagesComponent = mount(<ProductImages {...props} debug />);

  it('Should render correctly', () => {
    expect(ProductImagesComponent).toMatchSnapshot();
  });
});
