/* eslint-disable no-undef */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { mount } from 'enzyme';

import Selectors from '../../client/src/components/ProductSubs/Selectors.jsx';

const props = {
  skus: {
    407566: { quantity: 8, size: 'XS' },
    407567: { quantity: 16, size: 'S' },
    407568: { quantity: 17, size: 'M' },
    407569: { quantity: 10, size: 'L' },
    407570: { quantity: 15, size: 'XL' },
    407571: { quantity: 6, size: 'XXL' },
  },
};

describe('Selectors', () => {
  const SelectorsComponent = mount(<Selectors {...props} debug />);

  it('Should render correctly', () => {
    expect(SelectorsComponent).toMatchSnapshot();
  });
});
