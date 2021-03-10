/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/src/components/App.jsx';

describe('App', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<App debug />);

    expect(component).toMatchSnapshot();
  });
});
