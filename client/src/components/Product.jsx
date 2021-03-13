import React from 'react';
import styled from 'styled-components';

import ProductImages from './ProductSubs/ProductImages.jsx';
import ProductOverview from './ProductSubs/ProductOverview.jsx';
import Description from './ProductSubs/Description.jsx';
import FeaturesList from './ProductSubs/FeaturesList.jsx';

const Wrapper = styled.div`
  width: 75vw;
  font-family: 'Lato', sans-serif;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const TopWrapper = styled.div`
  width: 75vw;
  height: auto;
  min-height: 70vh;
  max-height: 74vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 5px;
  margin-bottom: 4vh;
`;

const BottomWrapper = styled.div`
  margin: auto;
  width: 65vw;
  display: flex;
  flex-direction: row;
  padding-top: 5px;
  margin-bottom: 5vh;
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
      price: this.props.productStyles.results[0].original_price,
      sale: this.props.productStyles.results[0].sale_price,
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
          price: image.original_price,
          sale: image.sale_price,
        });
      }
    });
  }

  render() {
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
              price={this.state.price}
              sale={this.state.sale}
              reviewsMeta={this.props.reviewsMeta}
            />
          </TopWrapper>

          <BottomWrapper>
            <Description info={this.props.productDetails} />
            <FeaturesList
              id={this.props.productDetails.id}
              features={this.props.productDetails.features}
            />
          </BottomWrapper>

        </Wrapper>
      );
    }
    return <div>empty</div>;
  }
}

export default Product;
