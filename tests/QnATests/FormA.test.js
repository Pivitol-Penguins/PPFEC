import React from 'react';
import { mount } from 'enzyme';
import FormA from '../../client/src/components/QnAComponents/FormAnswer.jsx';

describe('This is for the Answer Form', () => {
  const props = {
    id: 1234,
    name: 'Big Rock',
    body: 'asdf',
  };

  const FormAComp = mount(<FormA {...props} />);

  it('Should render Answer Form properly', () => {
    expect(FormAComp).toMatchSnapshot();
  });
});
