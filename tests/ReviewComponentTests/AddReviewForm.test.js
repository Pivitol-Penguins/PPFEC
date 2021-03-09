/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import AddReviewForm from '../../client/src/components/reviewsSubComponents/AddReviewForm.jsx';
import RatingStars from '../../client/src/components/reviewsSubComponents/RatingStars.jsx';

describe('Add Review Form test', () => {
  const props = {
    summary: '',
    productId: 14950,
    characteristics: {
      Comfort: { id: 50085, value: '3.1891891891891892' },
      Fit: { id: 50083, value: '2.9189189189189189' },
      Length: { id: 50084, value: '2.5405405405405405' },
      Quality: { id: 50086, value: '3.1081081081081081' },
    },
  };
  let AddReviewFormComponent;
  beforeEach(() => {
    AddReviewFormComponent = mount(<AddReviewForm {...props} debug />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should render correctly Add Review Form', () => {
    // mount render the whole dom with styled-component
    expect(AddReviewFormComponent).toMatchSnapshot();
  });

  it('The form should contain RatingStar component', () => {
    expect(AddReviewFormComponent.find(<RatingStars />)).toBeTruthy();
  });

  it('The characteristics rating section should has the same characteristics as the props', () => {
    expect(AddReviewFormComponent.find('Comfort')).toBeTruthy();
    expect(AddReviewFormComponent.find('Fit')).toBeTruthy();
    expect(AddReviewFormComponent.find('Length')).toBeTruthy();
    expect(AddReviewFormComponent.find('Quality')).toBeTruthy();
  });

  it('The form should capture summary input', () => {
    const summaryInput = AddReviewFormComponent.find('input').at(22);
    summaryInput.instance().value = 'summary testing';
    summaryInput.simulate('change');
    expect(AddReviewFormComponent.state('summary')).toBe('summary testing');
  });

  it('The form should have a textarea and it captures body input', () => {
    const bodyInput = AddReviewFormComponent.find('textarea').at(0);
    bodyInput.instance().value = 'body testing';
    bodyInput.simulate('change');
    expect(AddReviewFormComponent.state('body')).toBe('body testing');
  });

  it('The form should have a photo upload input', () => {
    const photoUpload = AddReviewFormComponent.find('input').at(23);
    const inputType = photoUpload.instance().type;
    expect(inputType).toBe('file');
  });

  it('The form should have a handle submit function', () => {
    const mockSubmit = jest.fn();
    const spyOnSubmit = jest.spyOn(AddReviewFormComponent.instance(), 'handleSubmit');
    const mockEvent = {
      target: {
        productId: 14950,
        rating: 5,
        characteristics: {
          Comfort: { id: 50085, value: '3.1891891891891892' },
          Fit: { id: 50083, value: '2.9189189189189189' },
          Length: { id: 50084, value: '2.5405405405405405' },
          Quality: { id: 50086, value: '3.1081081081081081' },
        },
        recommend: undefined,
        summary: 'summary testing',
        body: 'bodytesting',
        name: 'test',
        email: 'test@test.com',
        photos: [],
      },
    };
    AddReviewFormComponent.instance().handleSubmit(mockEvent);
    expect(spyOnSubmit).toHaveBeenCalled();
  });
});
