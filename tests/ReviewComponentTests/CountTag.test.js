import React from 'react';
import { shallow, mount, render } from 'enzyme';
import CountTag from '../../client/src/components/reviewsSubComponents/CountTag.jsx';

describe('CountTag Component', () => {
  const props = {
    ratingCount: 4,
  };
  let CountTagComponent;
  beforeEach(() => {
    CountTagComponent = mount(<CountTag {...props} debug />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should render correctly', () => {
    expect(CountTagComponent).toMatchSnapshot();
  });
});