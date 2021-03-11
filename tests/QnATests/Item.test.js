import React from 'react';
import { shallow, mount } from 'enzyme';
import Item from '../../client/src/components/QnAComponents/Item.jsx';

describe('One Question Test', () => {
  const props = {
    id: 152944,
    item: {
      answers: {
        1443618: {
          answerer_name: 'sadf',
          body: 'asdf',
          date: '2021-03-08T00:00:00.000Z',
          helpfulness: 0,
          id: 1443618,
          photos: ['https://pngimg.com/uploads/mario/mario_PNG53.png', 'https://pngimg.com/uploads/mario/mario_PNG53.png'],
        },
        asker_name: 'asdf',
        question_body: 'awdsf',
        question_date: '2021-03-08T00:00:00.000Z',
        question_helpfulness: 1,
        question_id: 152944,
        reported: false,
      },
    },
  };

  const itemComp = shallow(<Item {...props} debug />);
  const itemBody = (itemComp.find('div').at(0).text());

  it('Should render Item correctly', () => {
    expect(itemComp).toMatchSnapshot();
  });

  it('calls handleClick', () => {
    expect(itemBody).toEqual('Q:Helpful?Yes(undefined)|Add AnswerA:<AnswerList /><MoreA />');
  });

  // it('Should render the answer body correctly', () => {
  //   expect(itemHelp).toEqual('Helpful?');
  // });

  // it('Should render the answer body correctly', () => {
  //   expect(itemSep).toEqual('|');
  // });
});
