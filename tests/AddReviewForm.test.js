/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import AddReviewForm from '../client/src/components/reviewsSubComponents/AddReviewForm.jsx';
import RatingStars from '../client/src/components/reviewsSubComponents/RatingStars.jsx';

describe('Add Review', () => {
  const props = {
    productId: 14950,
    characteristics: {
      Comfort: { id: 50085, value: '3.1891891891891892' },
      Fit: { id: 50083, value: '2.9189189189189189' },
      Length: { id: 50084, value: '2.5405405405405405' },
      Quality: { id: 50086, value: '3.1081081081081081' },
    },
  };
  const AddReviewFormComponent = mount(<AddReviewForm {...props} debug />);

  it('Should render correctly Add Review Form', () => {
    // mount render the whole dom with styled-component
    expect(AddReviewFormComponent).toMatchSnapshot();
  });

  it('The form should contain RatingStar component', () => {
    expect(AddReviewFormComponent.find(<RatingStars />)).toBeTruthy();
  });

  it('The characteristics rating section should has the same number of characteristics as the props', () => {
    expect(AddReviewFormComponent.find('Charateristics')).to.have.lengthOf(4);
  });
});
