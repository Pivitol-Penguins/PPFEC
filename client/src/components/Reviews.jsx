import React from 'react';
import styled from 'styled-components';
import ReviewsList from './reviewsSubComponents/ReviewsList.jsx';
import RatingSummary from './reviewsSubComponents/RatingSummary.jsx';
import RatingBreakDown from './reviewsSubComponents/RatingBreakDown.jsx';
import ProductBreakDown from './reviewsSubComponents/ProductBreakDown.jsx';

const ReviewsContainer = styled.div`
  width: 1024px;
  height: 740px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
  padding: 10px 20px 10px 20px;

`;

const ReviewsTitle = styled.div`
  color: black;
  font-size: 20px;
  text-align: left;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const RatingWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
  padding: 30px 20px;
`;

const Reviews = (props) => {
  const { reviews, reviewsMeta } = props;
  console.log(reviews);
  console.log(reviewsMeta);
  return (
    <ReviewsContainer>
      <ReviewsTitle>RATINGS & REVIEWS</ReviewsTitle>
      <Wrapper>
        <RatingWrapper>
          <RatingSummary reviewsMeta={reviewsMeta} />
          <RatingBreakDown reviewsMeta={reviewsMeta} />
          <ProductBreakDown reviewsMeta={reviewsMeta} />
        </RatingWrapper>
        <ReviewsList reviews={reviews} />
      </Wrapper>
    </ReviewsContainer>
  );
};

export default Reviews;
