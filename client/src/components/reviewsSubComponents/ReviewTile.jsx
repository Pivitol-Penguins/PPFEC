/* eslint-disable camelcase */
import React from 'react';
import styled from 'styled-components';
import RatingStars from './RatingStars.jsx';

const TileContainer = styled.div`
  margin: 0 auto;
  padding: 10px 30px;
  border-bottom: 1px solid black;
`;

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];

const StarDateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const ResponseWrapper = styled.div`
  margin: 0 auto;
  backgound-color: lighblue;
`;

const ReviewThumbsWrapper = styled.img`
  display: inline-flex;
  justify-content: space-around;
  align-items: flex-star;
  border: 1px solid #ddd;
  padding: 5px;
  width: 80px;

  & :hover {
    box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
  }
`;

class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { review } = this.props;
    const {
      date, rating, reviewer_name, summary, body, helpfulness,
    } = review;
    // Formatting date
    const reviewDate = new Date(date);
    const month = monthNames[reviewDate.getUTCMonth()];
    const day = reviewDate.getUTCDate();
    const year = reviewDate.getUTCFullYear();

    // calculating the percentage for stars
    const percentage = (rating / 5) * 100;

    // conditional rendering for recommend label
    let recommendLabel;
    let response;
    if (review.recommend) {
      recommendLabel = <div>✓ I recommend this product</div>;
    }
    // conditional rendering for response
    if (review.response) {
      response = (
        <ResponseWrapper>
          <h4>Response from seller</h4>
          <p>{review.response}</p>
        </ResponseWrapper>
      );
    }
    // conditional rendering for photos
    let photos;
    if (review.photos.length > 0) {
      photos = (
        <div>
          {review.photos.map((photo, index) => (
            <ReviewThumbsWrapper key={photo.id} src={photo.url} alt={`${index}reviewPhoto`} />
          ))}
        </div>
      );
    }

    return (
      <TileContainer>
        <StarDateWrapper>
          <RatingStars percent={percentage} />
          <span>
            { reviewer_name }
            ,
            {' '}
            {month}
            {' '}
            {day}
            ,
            {' '}
            {year}
          </span>
        </StarDateWrapper>
        <h3>{summary}</h3>
        <p>{body}</p>
        {photos}
        {recommendLabel}
        {response}
        <div>
          <span>
            Helpful?
            <a href="">Yes</a>
            (
            {helpfulness}
            )
          </span>
          {' '}
          |
          {' '}
          <span><a href="">Report</a></span>
        </div>
      </TileContainer>
    );
  }
}

export default ReviewTile;
