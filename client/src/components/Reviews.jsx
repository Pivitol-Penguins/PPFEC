import React, { useState } from 'react';
import styled from 'styled-components';
import ReviewsList from './reviewsSubComponents/ReviewsList.jsx';
import RatingSummary from './reviewsSubComponents/RatingSummary.jsx';
import RatingBreakDown from './reviewsSubComponents/RatingBreakDown.jsx';
import ProductBreakDown from './reviewsSubComponents/ProductBreakDown.jsx';

const ReviewsContainer = styled.div`
  width: 60vw;
  // height: 70vw;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
  padding: 10px 20px 10px 20px;
  font-family: 'Lato', sans-serif;
`;

const ReviewsTitle = styled.div`
  color: black;
  font-size: 20px;
  text-align: left;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
`;

const RatingWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-basis: 35%;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 30px 30px;
`;

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: this.props.reviews.results,
      reviewsMeta: this.props.reviewsMeta,
      filterRating: 0,
      filterOn: false,
      product_id: this.props.product,
      entriesCount: this.props.count,
      page: this.props.page,
    };
    this.starFilter = this.starFilter.bind(this);
  }

  componentDidMount() {
    this.setState({});
  }

  starFilter(star) {
    this.setState({
      reviews: this.props.reviews.results.filter((review) => review.rating === star),
      filterRating: star,
    });
  }

  render() {
    // const { reviews, reviewsMeta } = this.props;
    console.log(this.state.reviews);
    console.log(this.state.reviewsMeta);
    return (
      <ReviewsContainer>
        <ReviewsTitle>RATINGS & REVIEWS</ReviewsTitle>
        <Wrapper>
          <RatingWrapper>
            <RatingSummary reviewsMeta={this.state.reviewsMeta} />
            <RatingBreakDown reviewsMeta={this.state.reviewsMeta} starFilter={this.starFilter} />
            <ProductBreakDown
              reviewsMeta={this.state.reviewsMeta}
            />
          </RatingWrapper>
          <ReviewsList
            reviews={this.state.reviews}
            reviewsMeta={this.state.reviewsMeta}
            filterRating={this.state.filterRating}
          />
        </Wrapper>
      </ReviewsContainer>
    );
  }
}

export default Reviews;
