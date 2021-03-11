/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Reviews from '../../client/src/components/Reviews.jsx';

describe('Review Component', () => {
  const props = {
    reviewsMeta: {
      product_id: '14930',
      ratings: {
        1: '5', 2: '7', 3: '3', 4: '5', 5: '2',
      },
      recommended: { false: '5', true: '17' },
      characteristics: {
        Fit: { id: 50009, value: '3.0454545454545455' },
        Length: { id: 50010, value: '3.2727272727272727' },
        Comfort: { id: 50011, value: '2.8636363636363636' },
        Quality: { id: 50012, value: '3.1818181818181818' },
      },
    },
    reviews: {
      results: [
        {
          review_id: 147659,
          rating: 2,
          summary: 'Tenetur quo blanditiis necessitatibus eveniet quo ipsa quia alias voluptas.',
          recommend: true,
          response: null,
          body: 'Non amet dolorem ut tempora perferendis sint ut adipisci suscipit. Sint ea itaque debitis quos enim odit. Ad perferendis nihil quisquam est. Laboriosam fuga ea amet repellat. Blanditiis aspernatur nostrum aspernatur quas necessitatibus.',
          date: '2021-01-26T00:00:00.000Z',
          reviewer_name: 'Shyanne6',
          helpfulness: 12,
          photos: [],
        },
        {
          review_id: 147667,
          rating: 1,
          summary: 'Minima repudiandae eligendi nemo sit quia aspernatur.',
          recommend: false,
          response: null,
          body: 'Corporis voluptate dolore earum voluptas numquam. Perspiciatis cumque et. Dignissimos asperiores ab repudiandae. Consectetur et exercitationem hic. Ut repudiandae dolorum id.',
          date: '2021-01-20T00:00:00.000Z',
          reviewer_name: 'Janiya_Frami98',
          helpfulness: 25,
          photos: [],
        },
        {
          review_id: 147660,
          rating: 5,
          summary: 'Neque repellendus modi eius quaerat ab rerum est animi praesentium.',
          recommend: true,
          response: '"Cumque aspernatur illum velit dolores minus."',
          body: 'Quo tempore est recusandae nobis. Asperiores ut qui dolor. Ducimus modi delectus illum tenetur excepturi.',
          date: '2021-01-10T00:00:00.000Z',
          reviewer_name: 'Celestine_Glover',
          helpfulness: 27,
          photos: [],
        },
        {
          review_id: 147676,
          rating: 4,
          summary: 'Officia reiciendis quaerat nam tempore ut ut numquam ut.',
          recommend: true,
          response: null,
          body: 'Earum ut laborum reprehenderit ipsa tempore sit. Odit rerum cum vitae autem eveniet. Qui qui repellat.',
          date: '2020-12-22T00:00:00.000Z',
          reviewer_name: 'Dameon63',
          helpfulness: 28,
          photos: [],
        }],
      reviews: [{
        review_id: 147660,
        rating: 5,
        summary: 'Neque repellendus modi eius quaerat ab rerum est animi praesentium.',
        recommend: true,
        response: '"Cumque aspernatur illum velit dolores minus."',
        body: 'Quo tempore est recusandae nobis. Asperiores ut qui dolor. Ducimus modi delectus illum tenetur excepturi.',
        date: '2021-01-10T00:00:00.000Z',
        reviewer_name: 'Celestine_Glover',
        helpfulness: 27,
        photos: [],
      },
      {
        review_id: 147676,
        rating: 4,
        summary: 'Officia reiciendis quaerat nam tempore ut ut numquam ut.',
        recommend: true,
        response: null,
        body: 'Earum ut laborum reprehenderit ipsa tempore sit. Odit rerum cum vitae autem eveniet. Qui qui repellat.',
        date: '2020-12-22T00:00:00.000Z',
        reviewer_name: 'Dameon63',
        helpfulness: 28,
        photos: [],
      }],
    },
  };
  let ReviewsComponent;
  beforeEach(() => {
    ReviewsComponent = mount(<Reviews {...props} debug />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should render correctly', () => {
    expect(ReviewsComponent).toMatchSnapshot();
  });
});
