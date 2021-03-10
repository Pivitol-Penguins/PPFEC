/* eslint-disable no-undef */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { mount } from 'enzyme';
import styled from 'styled-components';

import ViewerThumbnails from '../../client/src/components/ProductSubs/ViewerThumbnails.jsx';

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
  images: [{ thumbnail_url: 'https://images.unsplash.com/photo-1477420143023-6a0e0b04b69a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80', url: 'https://images.unsplash.com/photo-1477420143023-6a0e0b04b69a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80' }, { thumbnail_url: 'https://images.unsplash.com/photo-1518687338977-a84d3086a934?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80', url: 'https://images.unsplash.com/photo-1518687338977-a84d3086a934?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=652&q=80' }, { thumbnail_url: 'https://images.unsplash.com/photo-1556812191-381c7e7d96d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80', url: 'https://images.unsplash.com/photo-1556812191-381c7e7d96d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2982&q=80' }, { thumbnail_url: 'https://images.unsplash.com/photo-1526330563440-3ae2174b6bce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80', url: 'https://images.unsplash.com/photo-1526330563440-3ae2174b6bce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1655&q=80' }, { thumbnail_url: 'https://images.unsplash.com/photo-1516199707327-5399434d0aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80', url: 'https://images.unsplash.com/photo-1516199707327-5399434d0aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1083&q=80' }, { thumbnail_url: 'https://images.unsplash.com/photo-1541444446610-749d3299b35e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80', url: 'https://images.unsplash.com/photo-1541444446610-749d3299b35e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80' }],
};

describe('ViewerThumbnails', () => {
  const ViewerThumbnailsComponent = mount(<ViewerThumbnails {...props} debug />);

  const Container = ViewerThumbnailsComponent.find(Thumbs);

  it('Should render correctly', () => {
    expect(ViewerThumbnailsComponent).toMatchSnapshot();
  });

  // it('renders the slogan', () => {
  //   expect(Slogan).toEqual(props.info.slogan);
  // });

  //expect(FeaturesListComponent.find(Feature).length).toEqual(3);

  it('renders only 4 non-selected images', () => {
    expect(Container.contains(ViewerImageContainer)).toBe(true);
  });
});
