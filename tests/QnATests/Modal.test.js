import React from 'react';
import { mount } from 'enzyme';
import Modal from '../../client/src/components/QnAComponents/Modal.jsx';

describe('This is for the Modal', () => {
  const modalComp = mount(<Modal />);

  it('Should render More Modal', () => {
    expect(modalComp).toMatchSnapshot();
  });
});
