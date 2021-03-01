import React from 'react';
import styled from 'styled-components';
import RatingStars from 'react-star-ratings';

const RatingScore = styled.span`
  font-size: 70px;
  margin-left: 30px;
`;

const RatingSummary = ({ reviewsMeta }) => {
  let totalRating = 0;
  let totalRatingCount = 0;
  const stars = Object.keys(reviewsMeta.ratings);
  stars.forEach((star) => {
    totalRating += (Number(star) * Number(reviewsMeta.ratings[star]));
    totalRatingCount += Number(reviewsMeta.ratings[star]);
  });

  const avgRating = Number((totalRating / totalRatingCount).toPrecision(2));
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
