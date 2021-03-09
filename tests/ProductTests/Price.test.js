/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Price from '../../client/src/components/ProductSubs/Price.jsx';
import StylesComponent from '../../client/src/components/ProductSubs/StylesComponent.jsx';

describe('Regular Price with Sale Price', () => {
  const props = {
    price: 40.00,
    sale: 30.00,
  };
  const PriceComponent = mount(<Price {...props} debug />);

  it('Should render correctly', () => {
    expect(PriceComponent).toMatchSnapshot();
  });

  it('The form should contain the regular price', () => {
    expect(PriceComponent.find(<p>{`$${Math.round(props.price)}`}</p>)).toBeTruthy();
  });

  it('The form should contain the sale price', () => {
    expect(PriceComponent.find(<p>{`$${Math.round(props.sale)}`}</p>)).toBeTruthy();
  });
});

describe('Regular Price without Sale Price', () => {
  const props = {
    price: 40.00,
    sale: null,
  };
  const PriceComponent = mount(<Price {...props} debug />);

  it('Should render correctly', () => {
    expect(PriceComponent).toMatchSnapshot();
  });

  it('The form should contain the regular price', () => {
    expect(PriceComponent.find(<p>{`$${Math.round(props.price)}`}</p>)).toBeTruthy();
  });

  it('The form should not contain a sale price', () => {
    expect(PriceComponent.contains(<p>{`$${Math.round(props.sale)}`}</p>)).toBe(false);
  });
});
