import React from 'react';
import Styles from './StylesComponent.jsx';

function ProductOverview({category, name, price, styles}) {
  return (
    <div>
      <div className='productInfo'>
        <div>Ratings component will go here</div>
        <div>{category}</div>
        <div>{name}</div>
        <div>{price}</div>
      </div>
      <Styles/>
      <div>Buttons and size selectors go here</div>
    </div>
  )
}


export default ProductOverview;