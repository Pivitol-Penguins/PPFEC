/* eslint-disable no-undef */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { mount } from 'enzyme';

import Selectors from '../../client/src/components/ProductSubs/Selectors.jsx';
import ProductTestData from '../ProductTestData.js';

const props = {
  skus: ProductTestData.productStyles.results[0].skus,
};

describe('Selectors', () => {
  const SelectorsComponent = mount(<Selectors {...props} debug />);

  it('Should render correctly', () => {
    expect(SelectorsComponent).toMatchSnapshot();
  });
});
