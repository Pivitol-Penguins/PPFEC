import React from 'react';
import ProductImages from './ProductImages.jsx';
import ProductOverview from './ProductOverview.jsx';
import Features from './Features.jsx';

class Product extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStyle: 0,
    }
  }

  render () {
    return (
      <div>
        <div className='topLevel'>
          <ProductImages />
          <ProductOverview category={this.props.productDetails.category} name={this.props.productDetails.name} price={this.props.productDetails.default_price} styles={this.props.productStyles}/>
        </div>
        <div className='bottomLevel'>
          <div>{this.props.productDetails.description}</div>
          <Features features={this.props.productDetails.features}/>
        </div>
      </div>
    );
  }

}

export default Product;