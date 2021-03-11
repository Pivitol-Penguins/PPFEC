/* eslint-disable no-undef */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { mount } from 'enzyme';
import styled from 'styled-components';

import ExpandedImage from '../../client/src/components/ProductSubs/ExpandedImage.jsx';
import ProductTestData from '../ProductTestData.js';

const props = {
  info: {
    source: ProductTestData.productStyles.results[0].photos[0].url,
  },
  id: ProductTestData.productStyles.results[0].style_id,
  images: ProductTestData.productStyles.results[0].photos,
};

describe('ExpandedImage', () => {
  const ExpandedImageComponent = mount(<ExpandedImage {...props} debug />);

  it('Should render correctly', () => {
    expect(ExpandedImageComponent).toMatchSnapshot();
  });
});
