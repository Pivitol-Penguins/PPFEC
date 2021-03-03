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
      stylePhotos: null,
      skus: null,
    };
    this.getStyleID = this.getStyleID.bind(this);
    this.styleFinder = this.styleFinder.bind(this);
  }

  componentDidMount() {
    this.setState({
      currentStyle: this.props.productStyles.results[0].style_id,
      stylePhotos: this.props.productStyles.results[0].photos,
      skus: this.props.productStyles.results[0].skus,
    });
  }

  getStyleID(style) {
    this.setState({ currentStyle: style }, () => {
      this.styleFinder(this.state.currentStyle);
    });
  }

  styleFinder(style) {
    this.props.productStyles.results.forEach((image) => {
      if (image.style_id === Number(style)) {
        this.setState({
          stylePhotos: image.photos,
          skus: image.skus,
        });
      }
    });
  }

  render() {
    console.log(this.props.productStyles);
    if (this.state.currentStyle) {
      return (
        <Wrapper>
          <TopWrapper>
            <ProductImages
              images={this.state.stylePhotos}
              id={this.state.currentStyle}
            />
            <ProductOverview
              details={this.props.productDetails}
              styles={this.props.productStyles}
              skus={this.state.skus}
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
    return <div>empty</div>;
  }
}

export default Product;
