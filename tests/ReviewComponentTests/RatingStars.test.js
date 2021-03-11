/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import RatingStars from '../../client/src/components/reviewsSubComponents/RatingStars.jsx';

describe('RatingStars Component without passing props', () => {
  let RatingStarsComponent;
  beforeEach(() => {
    RatingStarsComponent = mount(<RatingStars debug />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should render correctly', () => {
    expect(RatingStarsComponent).toMatchSnapshot();
  });

  // it('Should have a onClick handler to set the rating', () => {
  //   const mockRating = 4;
  //   const spyOnClick = jest.spyOn(RatingStarsComponent.instance(), 'setRating');
  //   // RatingStarsComponent.simulate('Click');
  //   RatingStarsComponent.instance.setRating(mockRating);
  //   expect(spyOnClick).toHaveBeenCalled();
  //   expect(RatingStarsComponent.state('rating')).toBe(4);
  // });
});