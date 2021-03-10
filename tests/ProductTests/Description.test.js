/* eslint-disable no-undef */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { mount } from 'enzyme';

import Description from '../../client/src/components/ProductSubs/Description.jsx';
import ProductTestData from '../ProductTestData.js';

const props = {
  info: {
    slogan: ProductTestData.productDetails.slogan,
    description: ProductTestData.productDetails.description,
  },
};

describe('Description', () => {
  const DescriptionComponent = mount(<Description {...props} debug />);
  const Slogan = DescriptionComponent.find('h1').text();
  const DescriptionText = DescriptionComponent.find('p').text();

  it('Should render correctly', () => {
    expect(DescriptionComponent).toMatchSnapshot();
  });

  it('renders the slogan', () => {
    expect(Slogan).toEqual(props.info.slogan);
  });

  it('renders the description', () => {
    expect(DescriptionText).toEqual(props.info.description);
  });
});
