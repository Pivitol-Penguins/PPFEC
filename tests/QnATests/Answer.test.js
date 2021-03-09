import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Item from '../../client/src/components/QnAComponents/Item.jsx';
import AnswerList from '../../client/src/components/QnAComponents/AnswerList.jsx';
import Answer from '../../client/src/components/QnAComponents/Answer.jsx';

describe('One Answer Test', () => {
  const props = {
    answer: {
      answerer_name: 'sadf',
      body: 'asdf',
      date: '2021-03-08T00:00:00.000Z',
      helpfulness: 0,
      id: 1443618,
      photos: ['https://pngimg.com/uploads/mario/mario_PNG53.png', 'https://pngimg.com/uploads/mario/mario_PNG53.png'],
    },
  };

  const answerComp = mount(<Answer {...props} debug />);

  it('The form should contain Helpful component', () => {
    expect(answerComp.find(<div>Helpfulish</div>)).toBeTruthy();
  });

  it('The form should not contain Helpfulish component', () => {
    expect(answerComp.find(<div>Helpfulish</div>)).toEqual({});
  })
});
