import React from 'react';
import styled from 'styled-components';

import ProductImages from './ProductSubs/ProductImages.jsx';
import ProductOverview from './ProductSubs/ProductOverview.jsx';
import Description from './ProductSubs/Description.jsx';
import FeaturesList from './ProductSubs/FeaturesList.jsx';

const Wrapper = styled.div`
  width: 70vw;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const TopWrapper = styled.div`
  width: 70vw;
  display: flex;
  flex-direction: row;
  padding-top: 5px;
`;

const BottomWrapper = styled.div`
  margin: auto;
  width: 60vw;
  display: flex;
  flex-direction: row;
  padding-top: 5px;
`;

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStyle: null,
    };
    this.getStyleID = this.getStyleID.bind(this);
  }

  getStyleID(style) {
    this.setState({ currentStyle: style }, () => console.log('in product', this.state.currentStyle));
  }

  render() {
    return (
      <Wrapper>
        <TopWrapper>
          <ProductImages images={this.props.productStyles} />
          <ProductOverview
            details={this.props.productDetails}
            styles={this.props.productStyles}
            getStyleID={this.getStyleID}
          />
        </TopWrapper>
        <BottomWrapper>
          <Description info={this.props.productDetails} />
          <FeaturesList features={this.props.productDetails.features} />
        </BottomWrapper>
      </Wrapper>
    );
  }
}

export default Product;
