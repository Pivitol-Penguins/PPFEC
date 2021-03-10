/* eslint-disable no-undef */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { mount } from 'enzyme';
import styled from 'styled-components';

import FeaturesList from '../../client/src/components/ProductSubs/FeaturesList.jsx';
import Feature from '../../client/src/components/ProductSubs/Feature.jsx';

const List = styled.ul`
  list-style: none;
  flex-basis: 33%;
  padding-left: 1.5vw;
`;

const props = {
  features: [{ feature: "Sole", value: "Rubber" }, {feature: "Mid-Sole", value: "ControlSupport Arch Bridge"}, {feature: "Material", value: null}],
};

describe('FeaturesList', () => {
  const FeaturesListComponent = mount(<FeaturesList {...props} debug />);

  it('Should render correctly', () => {
    expect(FeaturesListComponent).toMatchSnapshot();
  });

  it('renders the feature list', () => {
    expect(FeaturesListComponent.find(Feature).length).toEqual(3);
  });
});
