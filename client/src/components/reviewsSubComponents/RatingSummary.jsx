import React from 'react';
import styled from 'styled-components';
import RatingStars from 'react-star-ratings';

const RatingScore = styled.span`
  font-size: 70px;
  margin-left: 30px;
`;

const RatingSummary = ({ reviews }) => {
  let totalRating = 0;
  for (let i = 0; i < reviews.results.length; i += 1) {
    totalRating += reviews.results[i].rating;
  }
  const avgRating = totalRating / reviews.results.length;
  return (
    <div>
      <RatingScore>{avgRating}</RatingScore>
      <RatingStars
        rating={avgRating}
        starRatedColor="gold"
        numberofStars={5}
        starDimension="15px"
        starSpacing="0px"
      />
    </div>
  );
};

export default RatingSummary;
