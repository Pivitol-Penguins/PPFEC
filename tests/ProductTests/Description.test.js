/* eslint-disable no-undef */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { mount } from 'enzyme';

import Description from '../../client/src/components/ProductSubs/Description.jsx';

const props = {
  info: { slogan: 'Faster than a just about anything', description: 'The Pumped Up serves up crisp court style with a modern look. These shoes show off tennis-whites shades and are constructed with a supple leather upper and a classic rubber cupsole.' },
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
