/* eslint-disable no-undef */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { mount } from 'enzyme';
import styled from 'styled-components';

import ViewerThumbnails from '../../client/src/components/ProductSubs/ViewerThumbnails.jsx';
import ProductTestData from '../ProductTestData.js';

const Thumbs = styled.div`
  z-index: 1;
  position: absolute;
  left: 1vw;
  top: .75vh;
  width: 6vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow-y: scroll;
  margin: 0;
`;

const ImageContainer = styled.div`
  margin: .85vh 0;
  height: 65px;
  width: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ViewerImageContainer = styled.div`
  margin: .85vh 0;
  height: 65px;
  width: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const props = {
  viewerIndex: 3,
  start: 1,
  end: 5,
  images: ProductTestData.productStyles.results[0].photos,
};

describe('ViewerThumbnails', () => {
  const ViewerThumbnailsComponent = mount(<ViewerThumbnails {...props} debug />);

  const Container = ViewerThumbnailsComponent.find(Thumbs);

  it('Should render correctly', () => {
    expect(ViewerThumbnailsComponent).toMatchSnapshot();
  });

  //expect(FeaturesListComponent.find(Feature).length).toEqual(3);
});
