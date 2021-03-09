import React from 'react';
import styled from 'styled-components';
import ReviewsList from './ReviewsList.jsx';
import RatingSummary from './RatingSummary.jsx';
import RatingBreakDown from './RatingBreakDown.jsx';
import ProductBreakDown from './ProductBreakDown.jsx';

const NoReviewPlaceholder = () => {
  return (
    <ReviewsContainer>
          <ReviewsTitle>RATINGS & REVIEWS</ReviewsTitle>
          <Wrapper>
            <RatingWrapper>
              <RatingSummary reviewsMeta={this.state.reviewsMeta} />
              <RatingBreakDown
                reviewsMeta={this.state.reviewsMeta}
                starFilter={this.starFilter}
                removeAllFilter={this.removeAllFilter}
              />
              <ProductBreakDown
                reviewsMeta={this.state.reviewsMeta}
              />
            </RatingWrapper>
            <ReviewsList
              loadFirstTwoReviews={this.loadFirstTwoReviews}
              fullreviewsArr={this.state.fullreviewsArr}
              reviews={this.state.reviews}
              reviewsMeta={this.state.reviewsMeta}
              loadMoreReviews={this.loadMoreReviews}
              sortSelected={this.sortSelected}
              addReviewToggle={this.addReviewToggle}
              addReviewShow={this.state.addReviewShow}
            />
          </Wrapper>
        </ReviewsContainer>
  )
};

export default NoReviewPlaceholder;
