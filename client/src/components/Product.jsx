import React from 'react';
import ProductImages from './ProductImages.jsx';
import ProductOverview from './ProductOverview.jsx';
import Description from './Description.jsx';
import FeaturesList from './FeaturesList.jsx';
import styled from 'styled-components';

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 5px;
`


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
          <ProductImages images={this.props.productStyles}/>
          <ProductOverview category={this.props.productDetails.category} name={this.props.productDetails.name} price={this.props.productDetails.default_price} styles={this.props.productStyles}/>
        </div>
        <BottomWrapper>
          <Description info={this.props.productDetails} />
          <FeaturesList features={this.props.productDetails.features}/>
        </BottomWrapper>
      </div>
    );
  }

}

export default Product;
