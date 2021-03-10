import React from 'react';
import { mount } from 'enzyme';
import MoreA from '../../client/src/components/QnAComponents/MoreA.jsx';

describe('This is for the More Answers Component', () => {

  const moreAComp = mount(<MoreA />);

  it('Should render More Answers Properly', () => {
    expect(moreAComp).toMatchSnapshot();
  });
});
