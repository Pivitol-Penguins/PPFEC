import React from 'react';
import { mount } from 'enzyme';
import QnA from '../../client/src/components/QnA.jsx';

describe('This is for the Add Questions', () => {
  const props = {
    questions:{
      product_id: "14037",
      results: [
        {
          answers: {
            768676: {
              answerer_name: 'Koby72',
              body: 'Laborum voluptatum aut et ex occaecati magni quas.',
              date: '2020-07-28T00:00:00.000Z',
              helpfulness: 15,
              id: 768676,
              photos: [],
            },
            768699: {
              answerer_name: 'Ko2',
              body: 'Laborum volupt aut et ex occaecati magni quas.',
              date: '2020-07-28T00:00:00.000Z',
              helpfulness: 15,
              id: 768699,
              photos: [],
            },
          },
          asker_name: 'Maxine.Kilback16',
          question_body: 'Fugit in recusandae delectus ut.',
          question_date: '2020-03-19T00:00:00.000Z',
          question_helpfulness: 30,
          question_id: 80975,
          reported: false,
        },
        {
          answers: {
            768676: {
              answerer_name: 'Koby72',
              body: 'Laborum voluptatum aut et ex occaecati magni quas.',
              date: '2020-07-28T00:00:00.000Z',
              helpfulness: 15,
              id: 768676,
              photos: [],
            },
            768699: {
              answerer_name: 'Ko2',
              body: 'Laborum volupt aut et ex occaecati magni quas.',
              date: '2020-07-28T00:00:00.000Z',
              helpfulness: 15,
              id: 768699,
              photos: [],
            },
          },
          asker_name: 'Maxine.Kilback16',
          question_body: 'Fugit in recusandae delectus ut.',
          question_date: '2020-03-19T00:00:00.000Z',
          question_helpfulness: 30,
          question_id: 80945,
          reported: false,
        },
      ],
    },
    name: 'This is a product',
  };

  const QnAComp = mount(<QnA {...props}/>);

  it('Should render Add Question Properly', () => {
    expect(QnAComp).toMatchSnapshot();
  });
});