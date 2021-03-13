import React from 'react';
import styled from 'styled-components';
import RatingStars from './RatingStars.jsx';

const RatingScore = styled.span`
  font-size: 70px;
  margin-left: 30px;
  font-weight: bold;
`;

const SummaryWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between
  align-item: flex-start;
`;

const RatingSummary = ({ reviewsMeta, reviews }) => {
  let totalRating = 0;
  let totalRatingCount = 0;
  let avgRating;

  const stars = Object.keys(reviewsMeta.ratings);
  if (stars.length !== 0 && reviews.length > 0) {
    stars.forEach((star) => {
      totalRating += (Number(star) * Number(reviewsMeta.ratings[star]));
      totalRatingCount += Number(reviewsMeta.ratings[star]);
    });
    avgRating = (Math.round((totalRating / totalRatingCount) * 10) / 10).toFixed(1);
  } else {
    avgRating = '0.0';
  }
  return (
    <SummaryWrapper>
      <RatingScore>{avgRating}</RatingScore>
      <RatingStars rating={avgRating} />
    </SummaryWrapper>
  );
};

export default RatingSummary;
