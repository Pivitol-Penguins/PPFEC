import React from 'react';
import { mount } from 'enzyme';
import AnswerList from '../../client/src/components/QnAComponents/AnswerList.jsx';

describe('This is for the Answers List Component', () => {
  const props = {
    answers: [
      {
        answerer_name: 'Charity18',
        body: 'Eos ipsam totam quia qui voluptate ipsum itaque quaerat.',
        date: '2020-06-05T00:00:00.000Z',
        helpfulness: 15,
        id: 719454,
        photos: [],
      },
      {
        answerer_name: 'Willa_Botsford',
        body: 'Nesciunt aliquam sit consequatur enim reprehenderit.',
        date: '2020-09-20T00:00:00.000Z',
        helpfulness: 10,
        id: 719455,
        photos: [],
      },
    ],
  };

  const answerListComp = mount(<AnswerList {...props} />);

  it('Should render AnswerList Properly', () => {
    expect(answerListComp).toMatchSnapshot();
  });
});
