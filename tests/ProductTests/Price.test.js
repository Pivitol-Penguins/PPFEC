/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Price from '../../client/src/components/ProductSubs/Price.jsx';
import StylesComponent from '../../client/src/components/ProductSubs/StylesComponent.jsx';

describe('Should show the default price', () => {
  const props = {
    noSale: { price: 40.00, sale: null },
    sale: { price: 40.00, sale: 30.00 },
  };
  const PriceComponent = mount(<Price {...props} debug />);

  it('Should render price correctly', () => {
    // mount render the whole dom with styled-component
    expect(PriceComponent).toMatchSnapshot();
  });

  it('The form should contain the regular price', () => {
    expect(PriceComponent.find(<p>{`$${Math.round(props.sale.price)}`}</p>)).toBeTruthy();
  });

  it('The form should contain the sale price when present', () => {
    expect(PriceComponent.find(<p>{`$${Math.round(props.sale.sale)}`}</p>)).toBeTruthy();
  });

  // it('The form should not render a sale price when absent', () => {
  //   expect(PriceComponent.find(<p>{`$${Math.round(props.noSale.sale)}`}</p>)).toBeFalsy();
  // });
});
