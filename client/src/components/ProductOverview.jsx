import React from 'react';
import Styles from './StylesComponent.jsx';

const ProductOverview = ({ details, styles }) => (
  <div>
    <div className="productInfo">
      <div>Ratings component will go here</div>
      <div>{details.category}</div>
      <div>{details.name}</div>
      <div>{details.default_price}</div>
    </div>
    <Styles styles={styles} />
    <div>Buttons and size selectors go here</div>
  </div>
);

export default ProductOverview;
