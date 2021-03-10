import React from 'react';
import { mount } from 'enzyme';
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
  const answerBody = (answerComp.find('div').at(0).text());

  it('Should render an Answer correctly', () => {
    expect(answerComp).toMatchSnapshot();
  });

  it('Should render the answer body correctly', () => {
    expect(answerBody).toEqual('asdfBy sadf on  March, 08 2021|Helpful?Yes(0)|Report');
  });
});
