import React from 'react';
import { mount } from 'enzyme';
import Search from '../../client/src/components/QnAComponents/Search.jsx';

describe('One Search Test', () => {
  const SearchComp = mount(<Search debug />);
  const SearchBody = (SearchComp.find('div').at(0).text());

  it('Should render correctly', () => {
    expect(SearchComp).toMatchSnapshot();
  });

  it('Should render the Search body correctly', () => {
    expect(SearchBody).toEqual('⚲');
  });
});
