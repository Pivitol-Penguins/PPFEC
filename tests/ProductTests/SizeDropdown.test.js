/* eslint-disable no-undef */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { mount } from 'enzyme';
import styled from 'styled-components';

import SizeDropdown from '../../client/src/components/ProductSubs/SizeDropdown.jsx';
import ProductTestData from '../ProductTestData.js';

const DDWrapper = styled.div`
  position: relative;
  width: 35%;
  font-size: 0;
  user-select: none;
  margin-left: 1.5vw;
`;

const DDHeader = styled.button`
  font-size: 1rem;
  position: relative;
  height: 7vh;
  width: 100%;
  padding: 0 1.25vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  color: #424242;
  border: 1px solid #424242;
  cursor: default;
  cursor: pointer;
  &:focus {
    outline: none;
    z-index: 1;
    border-top: 1px solid #e0e0e0;
    border-right: 1px solid #fff;
    border-left: 1px solid #fff;
    border-bottom: 1px solid #aeaeae;
    box-shadow: 0 3px 6px #a0a0a0, 0 3px 6px #a0a0a0;
  };
`;

const DDListItem = styled.button`
  display: inline-block;
  overflow: hidden;
  width: 100%;
  padding: 8px 10px;
  font-weight: 400;
  color: #424242;
  font-size: 1rem;
  cursor: default;
  cursor: pointer;
  border-width: 0;
  border-style: none;
  border-color: clear;
  background-color: white;
  border: 1px solid clear;
  border-bottom: 1px solid #aeaeae;
  &:hover {
    border-bottom: 2px solid #424242;
    border-top: 1px solid #aeaeae;
    transform: scale(1.1);
  };
`;

const props = {
  list: Object.values(ProductTestData.productStyles.results[0].skus),
};

describe('SizeDropdown', () => {
  const SizeDropdownComponent = mount(<SizeDropdown {...props} debug />);

  it('Should render correctly', () => {
    expect(SizeDropdownComponent).toMatchSnapshot();
  });

  const button = SizeDropdownComponent.find('button');
  // const ListItem = SizeDropdownComponent.find(DDListItem).at(6).text();

  // it('renders the correct list of available stock', () => {
  //   expect(ListItem).toEqual(props.available);
  // });

  it('toggles the list on dropdown header click', () => {
    button.simulate('click');
    expect(SizeDropdownComponent.state('isListOpen')).toEqual(true);
  });

  // Set-up event listener mock
  // window.addEventListener = jest.fn((event, callback) => {
  //   map[event] = callback;
  // });

  // it('toggles the list closed', () => {
  //   window.simulate('click');
  //   expect(SizeDropdownComponent.state('isListOpen')).toEqual(false);
  // });
});
