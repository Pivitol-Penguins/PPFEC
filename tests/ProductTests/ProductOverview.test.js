/* eslint-disable no-undef */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { mount } from 'enzyme';

import ProductOverview from '../../client/src/components/ProductSubs/ProductOverview.jsx';

const props = {
  details: { category: 'Pants', name: 'Morning Joggers' },
  skus: {
    407566: { quantity: 8, size: 'XS' },
    407567: { quantity: 16, size: 'S' },
    407568: { quantity: 17, size: 'M' },
    407569: { quantity: 10, size: 'L' },
    407570: { quantity: 15, size: 'XL' },
    407571: { quantity: 6, size: 'XXL' },
  },
  styles: {
    product_id: '14036',
    results: [
      {
        style_id: 70550, name: 'Black', original_price: '40.00', sale_price: null, photos: [{ thumbnail_url: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80' }],
      },
      {
        style_id: 70551, name: 'Grey', original_price: '40.00', sale_price: null, photos: [{ thumbnail_url: 'https://images.unsplash.com/photo-1562542082-519ebcdb43e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80' }],
      },
      {
        style_id: 70552,
        name: 'Goldenrod',
        original_price: '40.00',
        sale_price: '35.00',
        photos: [{ thumbnail_url: 'https://images.unsplash.com/photo-1530073391204-7b34a1497281?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80' }],
      },
      {
        style_id: 70553, name: 'Maroon', original_price: '40.00', sale_price: '35.00', photos: [{ thumbnail_url: 'https://images.unsplash.com/photo-1519857609704-61e751edba25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80' }],
      },
      {
        style_id: 70554, name: 'Chartreuse', original_price: '40.00', sale_price: '25.00', photos: [{ thumbnail_url: 'https://images.unsplash.com/photo-1530073391204-7b34a1497281?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80' }],
      },
      {
        style_id: 70555, name: 'White', original_price: '40.00', sale_price: null, photos: [{ thumbnail_url: 'https://images.unsplash.com/photo-1510390099355-23e690d8129d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80' }],
      }],
  },
};

describe('ProductOverview', () => {
  const ProductOverviewComponent = mount(<ProductOverview {...props} debug />);

  it('Should render correctly', () => {
    expect(ProductOverviewComponent).toMatchSnapshot();
  });
});
