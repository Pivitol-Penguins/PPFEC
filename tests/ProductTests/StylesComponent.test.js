/* eslint-disable no-undef */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { mount } from 'enzyme';

import StylesComponent from '../../client/src/components/ProductSubs/StylesComponent.jsx';
import ProductTestData from '../ProductTestData.js';

const props = {
  styles: ProductTestData.productStyles,
};

describe('StylesComponent', () => {
  const StylesComponentComponent = mount(<StylesComponent {...props} debug />);

  it('Should render correctly', () => {
    expect(StylesComponentComponent).toMatchSnapshot();
  });
});
