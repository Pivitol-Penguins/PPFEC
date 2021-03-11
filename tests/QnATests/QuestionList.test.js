import React from 'react';
import { mount } from 'enzyme';
import QuestionList from '../../client/src/components/QnAComponents/QuestionList.jsx';

describe('This is for the Question List', () => {
  const props = {
    items: [
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
        question_id: 80100,
        reported: false,
      },
    ],
    name: 'This is a product',
  };

  const questionListComp = mount(<QuestionList {...props} />);

  it('Should render More Answers Properly', () => {
    expect(questionListComp).toMatchSnapshot();
  });
});
