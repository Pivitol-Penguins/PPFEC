/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import waitUntil from "async-wait-until";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import _ from "lodash";
import ReviewTile from '../../client/src/components/reviewsSubComponents/ReviewTile.jsx';

describe('ReviewTile Component', () => {
  jest.mock('axios', () => ({
    __esModule: true,
    default: jest.fn(),
  }));

  const props = {
    review: {
      review_id: 147659,
      rating: 2,
      summary: 'Tenetur quo blanditiis necessitatibus eveniet quo ipsa quia alias voluptas.',
      recommend: true,
      response: null,
      body: 'Non amet dolorem ut tempora perferendis sint ut adipisci suscipit. Sint ea itaque debitis quos enim odit. Ad perferendis nihil quisquam est. Laboriosam fuga ea amet repellat. Blanditiis aspernatur nostrum aspernatur quas necessitatibus.',
      date: '2021-01-26T00:00:00.000Z',
      reviewer_name: 'Shyanne6',
      helpfulness: 12,
      photos: [{ id: 187178, url: 'https://images.unsplash.com/photo-1469617833234-8a6843da14d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2764&q=80' }, { id: 187157, url: 'https://images.unsplash.com/uploads/1412198532414025532c0/6a31309c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80' }],
    },
  };
  let ReviewTileComponent;
  beforeEach(() => {
    ReviewTileComponent = mount(<ReviewTile {...props} debug />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should render correctly', () => {
    expect(ReviewTileComponent).toMatchSnapshot();
  });

  it('Should render all the photos if there are photos from the data', () => {
    const photoNumber = ReviewTileComponent.find('img').length;
    expect(photoNumber).toEqual(props.review.photos.length);
  });

  // it('Should increment the helpfulness number when clicking "Yes" label', () => {
  //   jest.spyOn(axios, 'dafault').mockResolvedValue({});
  //   const spyOnYesClick = jest.spyOn(ReviewTileComponent.instance(), 'handleClickYes');
  //   // const mockPreventDefault = jest.fn();
  //   // const mockPersist = jest.fn();
  //   // const mockEvent = {
  //   //   preventDefault: mockPreventDefault,
  //   //   persist: mockPersist,
  //   // };
  //   const yesClick = ReviewTileComponent.find('.not-click').at(0);
  //   ReviewTileComponent.instance().handleClickYes();
  //   yesClick.simulate('click');
  //   yesClick.props('onClick');
  //   expect(spyOnYesClick).toBeCalled();
  //   process.nextTick(() => {
  //     expect(ReviewTileComponent.state('yesNum')).toBe(props.review.helpfulness + 1);
  //   });
  // });
});
