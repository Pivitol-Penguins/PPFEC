import React from 'react';

class Product extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render () {
    console.log('PRODUCT: ', this.props.productDetails);
    return (
      <div>
        <div>{this.props.productDetails.category}</div>
        <div>{this.props.productDetails.name}</div>
        <div>{this.props.productDetails.default_price}</div>
        <div>{this.props.productDetails.description}</div>
        {/* <div>{this.props.productDetails.features[0]}</div>
        <div>{this.props.productDetails.features[1]}</div> */}
      </div>
    );
  }

}

export default Product;