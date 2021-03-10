import React from 'react';
import { mount } from 'enzyme';
import FormQ from '../../client/src/components/QnAComponents/FormQuestion.jsx';

describe('This is for the Question Form', () => {
  const props = {
    name: 'Big Rock',
  };

  const FormQComp = mount(<FormQ {...props}/>);

  it('Should render Question Form properly', () => {
    expect(FormQComp).toMatchSnapshot();
  });
});
