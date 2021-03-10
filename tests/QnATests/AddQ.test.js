import React from 'react';
import { mount } from 'enzyme';
import AddQ from '../../client/src/components/QnAComponents/AddQ.jsx';

describe('This is for the Add Questions', () => {
  const AddQComp = mount(<AddQ />);

  it('Should render Add Question Properly', () => {
    expect(AddQComp).toMatchSnapshot();
  });
});
