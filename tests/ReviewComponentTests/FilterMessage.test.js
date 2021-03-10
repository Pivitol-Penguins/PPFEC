/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { mount } from 'enzyme';
import FilterMessage from '../../client/src/components/reviewsSubComponents/FilterMessage.jsx';

describe('FilterMessage Component Test', () => {
  const props = {
    filterStars: [1, 2, 4],
  };

  let FilterMessageComponent;
  beforeEach(() => {
    FilterMessageComponent = mount(<FilterMessage {...props} debug />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should render correctly', () => {
    // mount render the whole dom with styled-component
    expect(FilterMessageComponent).toMatchSnapshot();
  });
});