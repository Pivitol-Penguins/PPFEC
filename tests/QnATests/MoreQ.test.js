import React from 'react';
import { mount } from 'enzyme';
import MoreQ from '../../client/src/components/QnAComponents/MoreQ.jsx';

describe('This is for the More Questions Component', () => {
  const moreQComp = mount(<MoreQ />);

  it('Should render More Questions Properly', () => {
    expect(moreQComp).toMatchSnapshot();
  });
});
